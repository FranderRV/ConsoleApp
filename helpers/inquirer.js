const inquirer = require("inquirer");
const colors = require("colors");

const preguntas = [
  {
    type: "list",
    names: "opcion",
    message: "Seleccione",
    choices: [
      `${"1".yellow}. ${"Crear tarea".cyan}`,
      `${"2".yellow}. ${"Listar tareas".cyan}`,
      `${"3".yellow}. ${"Listar tareas completas".cyan}`,
      `${"4".yellow}. ${"Listar tareas pendientes".cyan}`,
      `${"5".yellow}. ${"Completar tarea(s)".cyan}`,
      `${"6".yellow}. ${"Borrar tarea".cyan}`,
      `${"0".yellow}. ${"Salir".cyan}`,
    ],
  },
];
const inquirerMenu = async () => {
  console.clear();
  console.log("====================================".yellow);
  console.log("           MENÚ DE CONSOLA          ".cyan);
  console.log("====================================\n".yellow);

  await inquirer.prompt(preguntas);
};

module.exports = {
  inquirerMenu,
};
