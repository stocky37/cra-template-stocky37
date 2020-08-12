#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const ignore = require('ignore');
const dotProp = require('dot-prop');

const ignorer = ignore().add(['node_modules', 'package*.json', '.idea', 'api/live.json']);
const renames = {
	'.gitignore': 'gitignore',
};

filteredKeys = [
	'name',
	'private',
	'version',
	'description',
	'browsersList',
	'dependencies.react-scripts',
	'dependencies.react',
	'dependencies.react-dom',
];

async function copyTemplateFiles(appDir, templateDir) {
	return fs.copy(appDir, templateDir, {
		dereference: true,
		filter: ignorer.createFilter(),
	});
}

async function applyRenames(rootDir) {
	const promises = [];
	Object.keys(renames).forEach((key) => {
		promises.push(fs.move(path.join(rootDir, key), path.join(rootDir, renames[key])));
	});
	return Promise.all(promises);
}

function templateFromPackage(pkg) {
	const filtered = {...pkg};
	filteredKeys.forEach((key) => dotProp.delete(filtered, key));
	return {
		package: {
			...filtered,
			dependencies: {
				...filtered.dependencies,
				...filtered.devDependencies,
			},
		},
	};
}

async function createTemplateJson(appDir, buildDir) {
	return fs
		.readJson(path.join(appDir, 'package.json'))
		.then((pkg) => fs.writeJson(path.join(buildDir, 'template.json'), templateFromPackage(pkg), {spaces: '\t'}));
}

function createTemplate(appDir = 'app', buildDir = 'build') {
	const templateDir = path.join(buildDir, 'template');
	copyTemplateFiles(appDir, templateDir).then(async () => {
		applyRenames(templateDir).then();
	});
	createTemplateJson(appDir, buildDir).then();
}

createTemplate();
