#!/usr/bin/env node 

//ue synchronous file handling as this is a CLI tool

//const { argv } = require('node:process');
import {argv} from "node:process";
import fs from "fs";

const tasksList = "taskList.json";


interface task {
  desc: string,
  status: "done" | "todo" | "in-progress",
  createdAt: string,
  dueDate: null | string,
}

const testTask: task = {
  desc : "testDesc",
  status: "todo",
  createdAt: Date(),
  dueDate: null
}

if (!fs.existsSync(tasksList)){
  fs.writeFileSync(tasksList, "");
}

const tasks = JSON.parse(fs.readFileSync(tasksList, { encoding: 'utf8' }));
console.log(tasks);
console.log(typeof tasks);
fs.writeFileSync(tasksList, JSON.stringify(tasks));
/*
testData.push({"name": argv[2]});
testData.push(testTask);

fs.writeFileSync(tasksList, JSON.stringify(testData));
/*
argv.forEach((val: string, index: number) => {
  console.log(`${index}: ${val}`);
  console.log(`${typeof index}: ${typeof val}`);
})*/




console.log(Date());
console.log(typeof Date());