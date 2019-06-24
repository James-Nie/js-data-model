'use strict';
/*
	author:niejianbo
    name:js-data-structure
    date:2019-06-24
    VERSION = "1.0.0"
*/
var Stack = require('./src/Stack').Stack;
var Queue = require('./src/Queue').Queue;
var Llist = require('./src/Llist').Llist;
var Dictionary = require('./src/Dictionary').Dictionary;
var DoubleLlist = require('./src/DoubleLlist').DoubleLlist;

module.exports = {
    Stack: Stack,
    Queue: Queue,
    Llist: Llist,
    Dictionary: Dictionary,
    DoubleLlist: DoubleLlist
} 
