const log = require('fancy-log');
const chokidar = require('chokidar');
const { exec } = require('node:child_process');

function jsCompile({ message = 'Initial' }) {
  log(`INIT js compile -> ${message}`);
  const command =
    './node_modules/.bin/esbuild ../js/main.js --bundle --outfile=../../www/assets/main.js';
  exec(command, (error, stdout, stderr) => {
    if (error) {
      log.error(`exec error: ${error}`);
      return;
    }
    log(`stdout: ${stdout}`);
    log.error(`stderr: ${stderr}`);
    log('END js compile');
  });
}

function jsTask() {
  jsCompile({});
  const watcher = chokidar.watch('../js/**/*.js', {
    persistent: true
  });
  watcher.on('change', path =>
    jsCompile({ message: `File ${path} has been changed` })
  );
}

module.exports = {
  task: jsTask
};
