const { read } = require("fs");

require("colors");

const mostrarMenu = () => {
    
    console.clear();
    console.log("====================================".yellow);
    console.log("           MENÚ DE CONSOLA          ".cyan);
    console.log("====================================\n".yellow);

    console.log(`${"1".yellow}. ${"Crear tarea".cyan}`);
    console.log(`${"2".yellow}. ${"Listar tareas".cyan}`);
    console.log(`${"3".yellow}. ${"Listar tareas completas".cyan}`);
    console.log(`${"4".yellow}. ${"Listar tareas pendientes".cyan}`);
    console.log(`${"5".yellow}. ${"Completar tarea(s)".cyan}`);
    console.log(`${"6".yellow}. ${"Borrar tarea".cyan}`);
    console.log(`${"0".yellow}. ${"Salir".cyan}`);

};

const entradasMenu = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccionar una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const salida = () => {
    return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("\nSelecciona ENTER para continuar", (opt) => {
      readline.close();
      resolve()
    });
  });
};

module.exports = {
  mostrarMenu,
  entradasMenu,
  salida,
};
