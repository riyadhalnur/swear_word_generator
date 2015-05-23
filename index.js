#! /usr/bin/env node

'use strict';

var _ = require('lodash');
var colors = require('colors');
var words = require('./words.json');

console.log(_.sample(words).red);