const fs = require('fs-extra');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
	appPath: resolveApp('.'),
	appPackageJson: resolveApp('package.json'),
	dist: resolveApp('dist'),
	templateBuild: resolveApp('dist/template'),
	templateJson: resolveApp('dist/template.json'),
	templatePackageJson: resolveApp('dist/package.json'),
};
