#!/usr/bin/env node 

//use synchronous file handling as this is a CLI tool
import {argv} from "node:process";
import fs from "fs";
import {addTask, deleteTask, updateTask, listTask} from './taskMethods.js';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tasksList = `${dirname(__dirname)}\\taskList.json`;
const tasks = fs.existsSync(tasksList) ? JSON.parse(fs.readFileSync(tasksList, { encoding: 'utf8' })) : {};


switch (argv[2]){
  case "add":
    //argv[0] argv[1] add <taskname> <taskdesc>
    addTask(tasks, argv[3], argv.slice(4).join(" "));
    break;
  case "delete":
    deleteTask(tasks, argv[3]);
    break;
  case "update":
    updateTask(tasks, argv[3], argv[4], argv.slice(5).join(" "));
    break;
  case "list":
    listTask(tasks, argv[3], argv.slice(4).join(" "));
    break;
  case "clear":
    for (const task in tasks) {
      delete tasks[task];
    }
    break;
  default:
    console.log("not a valid command");
}

fs.writeFileSync(tasksList, JSON.stringify(tasks));
