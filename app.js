require("colors");
const {
  inquirerMenu,
  pause,
  readInput,
  tasksListMenu,
  confirm,
  tasksToComplete,
} = require("./helpers/inquirer");
const Tasks = require("./models/Tasks");
const { saveDB, readDB } = require("./helpers/functionsFile");

console.clear();

const main = async () => {
  let opt = true;
  const tasks = new Tasks();

  if (readDB()) {
    tasks._list = readDB();
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const desc = await readInput("Descripción: ");
        tasks.createTask(desc);
        break;
      case 2:
        console.log(tasks.printTasks());
        break;
      case 3:
        console.log(tasks.filterTasks(true));
        break;
      case 4:
        console.log(tasks.filterTasks(false));
        break;
      case 5:
          const options = await tasksToComplete(tasks._list)
          tasks.completeTasks(options) 
        break;
      case 6:
        const id = await tasksListMenu(tasks._list);
        if (id !== 0) {
          const ok = await confirm("¿Desea eliminar la tarea?");
          if (ok) {
            console.log("Tarea eliminada con éxito".green);
            tasks.deleteTask(id);
          }
        }
        break;
    }

    saveDB(tasks._list);

    await pause();
  } while (opt);
};

main();
