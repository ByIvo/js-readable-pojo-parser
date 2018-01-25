#!/usr/bin/env node
'use strict';

var PojoReader = require('./pojo-reader.js');
console.log(process);
var pojoReader = new PojoReader(process.argv[2]);

pojoReader.read();
