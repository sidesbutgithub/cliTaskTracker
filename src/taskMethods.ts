interface task {
  desc: string,
  status: "done" | "todo" | "in-progress",
  createdAt: string,
  lastUpdate: object,
  dueDate: null | string,
}

function addTask(database: object, taskName:string, taskDesc:string|undefined, due: string):void{
  if (taskName in database){
    console.log("task name already in use");
    return;
  }
  if (taskDesc===undefined){
    taskDesc = taskName;
  }

  const newTask = {
    desc: taskDesc,
    status: "todo",
    createdAt: Date(),
    lastUpdate: {created: Date()},
    dueDate: due
  }
  // @ts-ignore
  database[taskName] = newTask;
}

function deleteTask(database: object, taskName:string):void{
  if (!(taskName in database)){
    console.log("task name not in use");
    return;
  }
  // @ts-ignore
  delete database[taskName];
}

export {task, addTask, deleteTask}