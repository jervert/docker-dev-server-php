const { mkdirp } = require('mkdirp');
const sass = require('./task.js');
const js = require('./task.sass');

mkdirp('../../www/assets');
sass.task();
js.task();
