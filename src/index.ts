#!/usr/bin/env node 
//const { argv } = require('node:process');
import {argv} from "node:process";

// print process.argv
argv.forEach((val: string, index: number) => {
  console.log(`${index}: ${val}`);
  console.log(`${typeof index}: ${typeof val}`);
});