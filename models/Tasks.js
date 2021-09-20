const Task = require("./Task");
const colors = require("colors");

class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  createTask(desc = "default") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  printTasks() {
    var message = "";

    for (const key in this._list) {
      let state = this._list[key].complete;
      let stateMSG = state ? "Completado".green : "Pendiente".red;
      let index = (Object.keys(this._list).indexOf(key) + 1).toString().green;
      let MSG = `${this._list[key].desc} ${"|".cyan} ${stateMSG}`;
      let conditionalMSG = `${index} ${"::".cyan} ${
        state ? MSG.green : MSG.red
      } \n`;
      message += conditionalMSG;
    }

    return message;
  }

  filterTasks(stateTask = false) {
    var message = "";

    for (const key in this._list) {
      let state = this._list[key].complete;
      if (state === stateTask) {
        let stateMSG = state ? "Completado".green : "Pendiente".red;
        let index = (Object.keys(this._list).indexOf(key) + 1).toString().green;
        let MSG = `${this._list[key].desc} ${"|".cyan} ${stateMSG}`;
        let conditionalMSG = `${index} ${"::".cyan} ${
          state ? MSG.green : MSG.red
        } \n`;

        message += conditionalMSG;
      }
    }

    if (message.length === 0) {
      return "No hay tareas en lista".cyan;
    }

    return message;
  }
  completeTasks(completeTasks = []) {
    for (const key in this._list) {
      if (completeTasks.includes(this._list[key].id)) {
        this._list[key].complete = true;
      } else {
        this._list[key].complete = false;
      }
    } 
  }
  deleteTask(id) {
    if (this._list[id]) {
      delete this._list[id];
    }
  }
}

module.exports = Tasks;
