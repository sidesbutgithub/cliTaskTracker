interface task {
  desc: string,
  taskStatus: "done" | "todo" | "in-progress",
  createdAt: string,
  lastUpdate: object,
}

function addTask(database: object, taskName:string, taskDesc:string|undefined): void{
  if (taskName in database){
    console.log("task name already in use");
    return;
  }

  if (taskDesc===undefined){
    taskDesc = taskName;
  }

  const newTask = {
    desc: taskDesc,
    taskStatus: "todo",
    createdAt: Date(),
    lastUpdate: {"created": Date()}
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
      console.log("unable to change target attribute of task");
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
      break;
    case "taskStatus":
      if (!(newVal==="done" || newVal==="todo" || newVal==="in-progress")){
        console.log("invalid value for taskStatus");
        return;
      }
    case "desc":
      // @ts-ignore
      const updateLog = `update ${taskName}: ${currTask[attributeName]} -> ${newVal}`;
      // @ts-ignore
      currTask[attributeName] = newVal;
      const newUpdate = {};
      // @ts-ignore
      newUpdate[updateLog] = Date();
      currTask.lastUpdate = newUpdate;
      break;
    default:
      console.log("attribute name not in use");
      return;
  }


}

export {task, addTask, deleteTask, updateTask}