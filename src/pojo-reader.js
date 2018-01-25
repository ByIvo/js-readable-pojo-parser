#!/usr/bin/env node
'use strict';

function PojoReader(path) {
  this._path = path;
  this._metadata = {};
}

module.exports = PojoReader;

PojoReader.prototype.read = function () {
  var lineReader = require('line-reader');
  var self = this;
  
  lineReader.eachLine(this._path, function(line, last) {
    console.log(line + " --- " + last);
  });
};

PojoReader.prototype.fetchMetadata = function () {
  return this._metadata;
};

PojoReader.prototype.fetchContent = function () {
  return this._content.toString();
};
