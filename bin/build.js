#!/usr/bin/env node

const fs = require('fs-extra');
const ignore = require('ignore');

const ignorer = ignore().add(['node_modules', 'package*.json', '.idea', 'api/live.json']);

async function copyTemplateFiles(appDir, templateDir) {
	return fs.copy(appDir, templateDir, {
		dereference: true,
		filter: ignorer.createFilter(),
	});
}

function createTemplate(appDir = 'app', templateDir = 'template') {
	copyTemplateFiles(appDir, templateDir).then();
}

createTemplate();
