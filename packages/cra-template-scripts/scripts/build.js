const path = require('path');
const fs = require('fs-extra');
const ignore = require('ignore');
const dotProp = require('dot-prop');
const paths = require('../config/paths');
const renames = require('../config/renames');
const filters = require('../config/filters');

async function copyTemplateFiles(srcPath, destPath) {
	const ignorer = ignore().add(filters.ignored);
	const filter = ignorer.createFilter();
	const files = fs.readdirSync(srcPath);

	return Promise.all(
		files.filter(filter).map((src) => fs.copy(src, path.join(destPath, src), {dereference: true, filter}))
	);
}

async function applyRenames(srcPath) {
	const promises = [];
	Object.keys(renames).forEach((key) => {
		promises.push(fs.move(path.join(srcPath, key), path.join(srcPath, renames[key]), {overwrite: true}));
	});
	return Promise.all(promises);
}

function templateFromPackage(packageJson) {
	const filtered = {...packageJson};
	filters.packageJsonKeys.forEach((key) => dotProp.delete(filtered, key));
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

async function createTemplateJson(packageJsonPath, templateJsonPath) {
	return fs
		.readJson(packageJsonPath)
		.then((pkg) => fs.writeJson(templateJsonPath, templateFromPackage(pkg), {spaces: 2}));
}

Promise.all([
	copyTemplateFiles(paths.appPath, paths.templateBuild).then(async () => applyRenames(paths.templateBuild)),
	createTemplateJson(paths.appPackageJson, paths.templateJson),
]).then();
