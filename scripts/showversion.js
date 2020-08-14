const fs = require('fs-extra');

return fs.readJson('package.json').then((pkg) => console.log(pkg.version));
