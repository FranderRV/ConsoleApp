const fs = require("fs");
const path = "./db/tasks.json";

const saveDB = (data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data)); 
  } catch (error) {
    throw error;
  }
};

const readDB = () => {
  try {
    if (fs.existsSync(path)) {
      const info = fs.readFileSync(path, { encoding: "utf-8" });
      if (info.length > 0) {
        return JSON.parse(info);
      }
    }
    return null;
  } catch (error) {
    return false
  }
};

module.exports = { saveDB, readDB };
