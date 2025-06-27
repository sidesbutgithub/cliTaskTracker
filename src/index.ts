#!/usr/bin/env node 

//use synchronous file handling as this is a CLI tool
import {argv} from "node:process";
import fs from "fs";
import {task, addTask, deleteTask, updateTask} from './taskMethods.js';
const tasksList = "taskList.json";
const tasks = fs.existsSync(tasksList) ? JSON.parse(fs.readFileSync(tasksList, { encoding: 'utf8' })) : {};

switch (argv[2]){
  case "add":
    //argv[0] argv[1] add <taskname> <taskdesc> <duedate>
    addTask(tasks, argv[3], argv[4]);
    break;
  case "delete":
    console.log("called delete");
    deleteTask(tasks, argv[3]);
    break;
  case "update":
    updateTask(tasks, argv[3], argv[4], argv[5]);
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