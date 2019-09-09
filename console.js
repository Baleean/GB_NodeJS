"use strict";

var ansi    = require('ansi');
var cursor  = ansi(process.stdout);

var argv = require('optimist').argv;

cursor.red().bg.grey();

if(argv.x == 4) {
    cursor.blue().bg.black();
}

console.log("Hellooooooo");

cursor.hex('#FF0000').bold().bg.hex('#015C65').underline().write('\n');
cursor.horizontalAbsolute(5).write('body-5');
