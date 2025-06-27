#!/usr/bin/env node 

//ue synchronous file handling as this is a CLI tool

//const { argv } = require('node:process');
import {argv} from "node:process";
import fs from "fs";

//import {task, addTask} from './taskMethods';
import {task, addTask, deleteTask} from './taskMethods.js';

const tasksList = "taskList.json";

/*
interface task {
  desc: string,
  status: "done" | "todo" | "in-progress",
  createdAt?: string,
  lastUpdate?: object,
  dueDate?: null | string,
}*/
/*
const testTask: task = {
  desc : "testDesc",
  status: "todo",

}

const testTask2: task = {
  desc : "testDesc",
  status: "todo"
  
}*/

const tasks = fs.existsSync(tasksList) ? JSON.parse(fs.readFileSync(tasksList, { encoding: 'utf8' })) : {};


switch (argv[2]){
  case "add":
    //argv[0] argv[1] add <taskname> <taskdesc> <duedate>
    addTask(tasks, argv[3], argv[4], argv[5]);
    break;
  case "delete":
    console.log("called delete");
    deleteTask(tasks, argv[3]);
    break;
  case "update":
    console.log("called update");
    break;
  case "list":
    console.log("called list");
    break;
  default:
    console.log("not a valid command");
}

fs.writeFileSync(tasksList, JSON.stringify(tasks));

console.log(tasks);
console.log(typeof tasks);