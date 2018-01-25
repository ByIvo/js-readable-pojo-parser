#!/usr/bin/env node
'use strict';

function MetadataResolver() {
  this._metadata = {};
}

module.exports = MetadataResolver;

MetadataResolver.prototype.resolveLine = function (line) {
  var resolvers = [
      require('./package-resolver.js'),
      require('./import-resolver.js'),
      require('./class-resolver.js'),
      require('./instance-field-resolver.js')
  ];

  for(var i=0; i<resolvers.length; i++) {
    var resolver = resolvers[i];

    var resolved = resolver(line, this._metadata);

    if (resolved) break;
  }

};

MetadataResolver.prototype.fetchMetadata = function () {
  return this._metadata;
};
