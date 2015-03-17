var slm = require('slm').render;

function slmPreprocessor(config, logger) {
  var log, options;

  log = logger.create('preprocessor.slm');
  options = options || {};

  return function(content, file, done) {
    var result;
    result = slm(content, options);
    log.debug('slm result', result);
    done(null, result);
  }
}

slmPreprocessor.$inject = ['config.slm', 'logger'];
module.exports = {
  'preprocessor:slm': ['factory', slmPreprocessor]
}
