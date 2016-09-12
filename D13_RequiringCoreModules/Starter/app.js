var util = require('util'); // use node utilities features

var name = 'Alexander';
var greeting = util.format('Hello, %s', name);
util.log(greeting);
