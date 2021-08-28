require("colors");
const { mostrarMenu, entradasMenu, salida } = require("./helpers/mensajes");

const main = async () => {
  let opt = "";
  do {
    mostrarMenu();
    opt = await entradasMenu();
    if (opt !== "0") await salida();
  } while (opt !== "0");
};

main();
