const sass= require('sass');
const { writeFile } = require('fs');
const { mkdirp } = require('mkdirp');
const log = require('fancy-log');
const chokidar = require('chokidar');

function sassCompile({ message = 'Initial' }) {
  log(`INIT sass compile -> ${message}`)
  try {
    const compiled = sass.compile(
      '../scss/style.scss',
      {style: 'compressed'}
    );
    writeFile('../../www/assets/style.css', compiled.css, error => {
      if(error) {
        return log.error(error);
      }
      log('SCSS compiled');
    });
  } catch (error) {
    log.error(error);
  }
  log('END sass compile')

}

function sassTask() {
  sassCompile({});
  const watcher = chokidar.watch('../scss/**/*.scss', {
    persistent: true
  });

  watcher
    .on('change', path => sassCompile({ message: `File ${path} has been changed` }));
}

mkdirp('../../www/assets');
sassTask({});
