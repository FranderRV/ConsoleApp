const inquirer = require("inquirer");
const colors = require("colors");
const header= ()=>{
  
  console.clear();
  console.log("====================================".yellow);
  console.log("           MENÚ DE CONSOLA          ".cyan);
  console.log("====================================\n".yellow);

}
const inquirerMenu = async () => {
  const preguntas = [
    {
      type: "list",
      name: "opcion",
      message: "Selecciona alguna opción",
      choices: [
        { value: 1, name: `${"1".yellow}. ${"Crear tarea".cyan}` },
        { value: 2, name: `${"2".yellow}. ${"Listar tareas".cyan}` },
        { value: 3, name: `${"3".yellow}. ${"Listar tareas completas".cyan}` },
        { value: 4, name: `${"4".yellow}. ${"Listar tareas pendientes".cyan}` },
        { value: 5, name: `${"5".yellow}. ${"Completar tarea(s)".cyan}` },
        { value: 6, name: `${"6".yellow}. ${"Borrar tarea".cyan}` },
        { value: 0, name: `${"0".yellow}. ${"Salir".cyan}` },
      ],
    },
  ];
  header()
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pause = async () => {
  const pregunta = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"Enter".green} para continuar`,
    },
  ];
  await inquirer.prompt(pregunta);
};

const readInput = async (message) => {
  const question = {
    type: "input",
    name: "desc",
    message,
    validate(value) {
      if (value.length === 0) {
        return "Por favor ingrese una descripción";
      } else {
        return true;
      }
    },
  };
  const { desc } = await inquirer.prompt(question);
  return desc;
};

const tasksListMenu = async (tasks = {}) => {
  const choices = Object.values(tasks).map((task, i) => {
    let state = task.complete;
    let stateMSG = task.complete ? "Completado".green : "Pendiente".red;
    let index = (i + 1).toString().green;
    let MSG = `${task.desc} ${"|".cyan} ${stateMSG}`;
    let conditionalMSG = `${index} ${"::".cyan} ${
      state ? MSG.green : MSG.red
    }`;
    return { value: task.id, name: conditionalMSG };
  });
choices.unshift({ value: 0, name: '0 -> Cancelar'.green })
  const preguntas = [
    {
      type: "list",
      name: "opcion",
      message: "Seleccione la tarea",
      choices,
    },
  ];

  header()
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const confirm = async (message) => {
  const question = [{ type: "confirm", name: "ok", message }];
  const { ok } = await inquirer.prompt(question);
  return ok;
};

/*----------------------------------------------------- */
const tasksToComplete = async (tasks = {}) => {
  const choices = Object.values(tasks).map((task, i) => {
   
    return { value: task.id, name: `${(i+1).toString().green} - ${task.desc}`, checked:task.complete?true:false };
  });
choices.unshift({ value: 0, name: '0 -> Volver al menú'.green })
  const preguntas = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione la tarea",
      choices,
    },
  ];
  header()
  const { ids } = await inquirer.prompt(preguntas);
  return ids;
};
module.exports = {
  inquirerMenu,
  pause,
  readInput,
  tasksListMenu,
  confirm,
  tasksToComplete
};
