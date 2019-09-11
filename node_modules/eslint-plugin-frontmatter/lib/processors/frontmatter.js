require('requireindex');
var _ = require('lodash');

module.exports = {

  // Specify that this processor transforms .js files
  '.js': {

    /**
    * @args:
    *   text `str` the text from the given file
    *   filename `str` the filename of the given file
    * @returns:
    *   `[str]` a list of strings (one per each line in the file)
    **/

    preprocess: function(text) {
      // Trim leading and trailing whitespace
      text = text.replace(/^\s+|\s+$/g, '');

      // Check if the file begins with frontmatter declaration
      if (text.substring(0,3) === '---') {
        // Find end of frontmatter
        var matchedDashes = /^---$/m.exec(text.slice(3));

        if (matchedDashes) {
          var dashStartIndex = matchedDashes.index;
          var sliceIndex = dashStartIndex + matchedDashes[0].length;
          return [text.slice(sliceIndex + 3).replace(/^\s+/, '')];
        }
      }

      return [text];  // return an array of strings to lint
    },

    /**
    * @args:
    *   messages `Message[][]` A two-dimensional array of Message objects
    *     where each top-level array item contains array of lint messages related
    *     to the text that was returned in array from preprocess() method
    *   filename `str` The filename of the given file
    * @returns:
    *   `[Message]` a one-dimensional array of the retained messages
    **/

    postprocess: function(messages) {
      return _.flatten(messages);
    },

    // Don't autofix lint errors
    supportsAutofix: false
  }
};