module.exports = {
	packageJsonKeys: [
		'name',
		'private',
		'version',
		'description',
		'browsersList',
		'dependencies.react-scripts',
		'dependencies.react',
		'dependencies.react-dom',
		'devDependencies.cra-template-scripts',
		'scripts.build:template',
	],
	ignored: ['node_modules', 'package*.json', '.idea', 'api/live.json', 'dist'],
};
