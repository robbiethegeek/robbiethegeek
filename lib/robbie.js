#! /usr/bin/env node
"use strict";
const Table = require('ascii-table');
let table = new Table('RobbieTheGeek');
const data = require('../data/robbie.json');

for (let key in data) {
	table.addRow(key, data[key]);
}

console.log(table.render());