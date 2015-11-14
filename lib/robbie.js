#! /usr/bin/env node
"use strict";
const Table = require('ascii-table');
let table = new Table('RobbieTheGeek');

table
	.addRow("Name: ", "Robbie Holmes")
	.addRow("Blog: ", "http://thegeekspeaks.io/")
	.addRow("Twitter Handle: ", "@robbiethegeek")
	.addRow("Twitter URL: ", "https://twitter.com/RobbieTheGeek")
console.log(table.render());