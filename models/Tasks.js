const Task = require("./Task");
const colors = require("colors");

class Tasks {
  _list = {};
  
  constructor() {
    this._list = {};
  }

  createTask(desc = 'default'){
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  printTasks(){
      var message = '' 

      for (const key in  this._list) {
          
        message += `${this._list[key].id.red} - ${this._list[key].desc} \n`
      }
       
      return message;
  }
}

module.exports = Tasks ;
