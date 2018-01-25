#!/usr/bin/env node
'use strict';

var PojoReader = require('./pojo-reader.js');

var pojoReader = new PojoReader(process.argv[2]);

pojoReader.read(function (metadata) {
  console.log(metadata);
});
