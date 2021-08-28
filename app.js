require("colors");
const { inquirerMenu,pause } = require("./helpers/inquirer");

const main = async () => {
  let opt = true;
  do {
    opt = await inquirerMenu()
    await pause()
    console.log({opt})
  } while (opt);
};

main();
