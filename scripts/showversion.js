#!/usr/bin/env node

const fs = require('fs-extra');

// display the version of the workspace that calls this script
process.chdir(process.argv[2]);
return fs.readJson('package.json').then((pkg) => console.log(pkg.version));
