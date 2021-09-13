const inquirer = require("inquirer");
const colors = require("colors");

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

  console.clear();
  console.log("====================================".yellow);
  console.log("           MENÚ DE CONSOLA          ".cyan);
  console.log("====================================\n".yellow);

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
    type: 'input',
    name:'desc',
    message,
    validate(value){
      if(value.length === 0){
          return 'Por favor ingrese una descripción'
      }else{
        return true
      }
    }
  }
  const {desc} = await inquirer.prompt(question);
  return desc;
};
module.exports = {
  inquirerMenu,
  pause,
  readInput
};
