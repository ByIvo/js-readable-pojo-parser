#!/usr/bin/env node
'use strict';

function PojoReader(path) {
  var PojoMetadataResolver = require('./pojo_metadata_resolver/metadata-resolver.js');
  this._path = path;
  this._metadataResolver = new PojoMetadataResolver();
}

module.exports = PojoReader;

PojoReader.prototype.read = function (callback) {
  var lineReader = require('line-reader');
  var self = this;

  lineReader.eachLine(this._path, function(line, last) {
    self._metadataResolver.resolveLine(line);

    if(last) {
      callback(self._metadataResolver.fetchMetadata());
    }
  });
};

PojoReader.prototype.fetchMetadata = function () {
  return this._metadataResolver;
};
