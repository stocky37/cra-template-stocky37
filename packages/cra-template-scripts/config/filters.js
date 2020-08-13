module.exports = {
	templateJsonKeys: [
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
	packageJsonKeys: ['private', 'scripts', 'dependencies', 'devDependencies', 'browserslist', 'husky', 'lint-staged'],
	ignored: ['node_modules', 'package*.json', '.idea', 'api/live.json', 'dist'],
};
