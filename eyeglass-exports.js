'use strict';

       var path = require('path'),
inlineUrlescape = require('inline-urlescape');

module.exports  = function(eyeglass, sass) {
  return {
    sassDir: path.join(__dirname, 'sass'),
    functions: {
      'inline-urlescape($text)': function(text, done) {
        done(sass.types.String(inlineUrlescape( text.getValue() )));
      }
    }
  };
};
