require("colors");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Tasks = require("./models/Tasks");

console.clear();

const main = async () => {
  let opt = true;
  const tasks = new Tasks();

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
    }

    await pause();
  } while (opt);
};

main();
