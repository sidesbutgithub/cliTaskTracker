#!/usr/bin/env node 

//ue synchronous file handling as this is a CLI tool

//const { argv } = require('node:process');
import {argv} from "node:process";
import fs from "fs";

let tasksList = "taskList.json";

if (!fs.existsSync(tasksList)){
  fs.writeFileSync(tasksList, "");
}

let testData = {"name": argv[2]};

fs.writeFileSync(tasksList, JSON.stringify(testData));
/*
argv.forEach((val: string, index: number) => {
  console.log(`${index}: ${val}`);
  console.log(`${typeof index}: ${typeof val}`);
})*/




console.log(argv[2])