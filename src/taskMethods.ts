interface task {
  desc: string,
  taskStatus: "done" | "todo" | "in-progress",
  createdAt: string,
  lastUpdate: string,
}

function addTask(database: object, taskName:string, taskDesc:string|undefined): void{
  if (taskName in database){
    console.log("task name already in use");
    return;
  }

  if (taskDesc===""){
    taskDesc = taskName;
  }

  const newTask = {
    desc: taskDesc,
    taskStatus: "todo",
    createdAt: Date(),
    lastUpdate: `created task ${taskName}`
  }
  // @ts-ignore
  database[taskName] = newTask;
  return;
}

function deleteTask(database: object, taskName:string): void{
  if (!(taskName in database)){
    console.log("task name not in use");
    return;
  }
  // @ts-ignore
  delete database[taskName];
  return;
}

function updateTask(database: object, taskName: string, attributeName: string, newVal: string): void{
  if (!(taskName in database)){
    console.log("task name not in use");
    return;
  }
  // @ts-ignore
  let currTask: task = database[taskName];
  switch (attributeName){
    case "createdAt":
    case "lastUpdate":
      console.log(`unable to change ${attributeName} of task`);
      return;
    case "name":
      if (newVal in database){
        console.log("task name already in use");
        return;
      }
      // @ts-ignore
      database[newVal] = database[taskName];
      // @ts-ignore
      delete database[taskName];
      // @ts-ignore
      database[newVal].lastUpdate = `task name change: ${taskName} -> ${newVal}`;
      break;
    case "taskStatus":
      if (!(newVal==="done" || newVal==="todo" || newVal==="in-progress")){
        console.log("invalid value for taskStatus");
        return;
      }
    default:
      console.log("huh")
      // @ts-ignore
      currTask.lastUpdate = `update ${taskName}: ${currTask[attributeName]} -> ${newVal}`;
      // @ts-ignore
      currTask[attributeName] = newVal;
      break;
  }
}

function listTask(database: object, filterAttribute: string, filterVal: string): void{
  if (filterAttribute == "attributes"){
    listAttributes(database);
    return;
  }

  if (filterAttribute == "names"){
    listNames(database);
    return;
  }

  let tasksFound = 0;
  if (filterAttribute === undefined){
    for (const [key, val] of Object.entries(database)){
      tasksFound+=1;
      console.log(key);
      for (const [subKey, subVal] of Object.entries(val)){
        console.log(`${subKey} : ${subVal}`);
      }
      console.log();
    }
    console.log(`${tasksFound} tasks found`);
    return;
  }

  for (const [key, val] of Object.entries(database)){
    if (filterAttribute in val){
      if (val[filterAttribute] === filterVal){
        tasksFound+=1;
        console.log(key);
        for (const [subKey, subVal] of Object.entries(val)){
          console.log(`${subKey} : ${subVal}`);
        }
        console.log();
      }
    }
  }
  console.log(`${tasksFound} tasks found for ${filterAttribute} == ${filterVal}`);
  if (tasksFound===0){
    console.log("try another attribute or value to filter by for better results")
  }
}

function listAttributes(database:object){
  console.log("List of Task Attributes:");
  const attributeList = new Set();
  for (const [key, val] of Object.entries(database)){
    for (const attributeName in val){
      attributeList.add(attributeName);
    }
  }
  console.log(Array.from(attributeList));
}

function listNames(database:object){
  console.log("List of Task Names:");
  const nameList = new Set();
  for (const key in database){
    nameList.add(key);

  }
  console.log(Array.from(nameList));
}


export {task, addTask, deleteTask, updateTask, listTask}