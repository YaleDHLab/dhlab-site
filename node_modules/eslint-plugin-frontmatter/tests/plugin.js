var CLIEngine = require('eslint').CLIEngine;
var plugin = require('../');
var fs = require('fs');
var path = require('path');
require('chai');
require('should');

// global reference for cli engine configured below
var cli;

function getFixturePath(relativePath) {
  return path.normalize(path.join(__dirname, relativePath));
}

describe('Tests for frontmatter ESLint processor', function() {

  // Specify a sample input file
  var sample = fs.readFileSync(getFixturePath('./fixtures/basic.js'), 'utf8');

  before(function() {
    cli = new CLIEngine({
      envs: ['browser'],
      extensions: ['js'],
      ignore: false,
      rules: {
        'no-console': 2,
        'no-undef': 2,
        'quotes': 2,
        'spaced-comment': 2
      },
      useEslintrc: false
    });
    cli.addPlugin('frontmatter', plugin);
  });

  describe('the preprocess function', function() {
    it('should remove frontmatter', function() {
      var processed = plugin['processors']['.js']['preprocess'](sample)
      var tripleDashes = processed[0].split('---').length;
      tripleDashes.should.equal(2);
    });

    it('should not raise a linting error', function() {
      var report = cli.executeOnText(sample, 'sample.js');
      var errors = report.results[0].messages;
      errors.length.should.equal(0);
    });

    it('should remove frontmatter even if --- in frontmatter', function() {
      var fixturePath = getFixturePath('./fixtures/withDashesInFrontMatter.js');
      var withDashes = fs.readFileSync(fixturePath, 'utf8');
      var processed = plugin.processors['.js'].preprocess(withDashes);
      processed[0].should.equal('var x;');
    });

    it('should not change JS even if --- present in code', function() {
      var fixturePath = getFixturePath('./fixtures/dashesInCode.js');
      var dashesInCode = fs.readFileSync(fixturePath, 'utf8');
      var processed = plugin.processors['.js'].preprocess(dashesInCode);
      processed[0].should.equal('x --- y;');
    });
  });
});