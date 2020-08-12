#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const ignore = require('ignore');

const ignorer = ignore().add(['node_modules', 'package*.json', '.idea', 'api/live.json']);
const renames = {
	'.gitignore': 'gitignore',
};

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

function createTemplate(appDir = 'app', templateDir = 'template') {
	copyTemplateFiles(appDir, templateDir).then(async () => {
		await applyRenames(templateDir);
	});
}

createTemplate();
