var slm = require('slm').render;

function slmPreprocessor(config, logger, helper) {
  var log, locals, opts;

  log = logger.create('preprocessor.slm');
  config = config || {};
  locals = helper._.clone(config.locals);
  options = helper._.clone(config.options);

  return function(content, file, done) {
    var result;
    log.debug('slm locals', locals);
    log.debug('slm options', options);
    log.debug('slm content', content);
    result = slm(content, locals, options);
    log.debug('slm result', result);
    done(null, result);
  }
}

slmPreprocessor.$inject = ['config.slmPreprocessor', 'logger', 'helper'];

module.exports = {
  'preprocessor:slm': ['factory', slmPreprocessor]
}
