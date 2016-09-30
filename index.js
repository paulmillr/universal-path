'use strict';
const sysPath = require('path');
const win = sysPath.win32;

const slashes = path => path.replace(/\\/g, '/');
const decorate = fn => function() {
  return slashes(fn.apply(win, arguments));
};

exports.slashes = slashes;

for (const key of ['delimiter', 'extname', 'isAbsolute', 'posix', 'sep', 'win32']) {
  exports[key] = sysPath[key];
}

for (const key of ['basename', 'dirname', 'join', 'normalize', 'relative', 'resolve']) {
  exports[key] = decorate(win[key]);
}
