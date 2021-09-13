const {v4:uuidv4} = require('uuid')
class Tarea{

    id = 0;
    desc = '';
    complete = null;

    constructor(desc){
        this.id = uuidv4;
        this.desc = desc;
        this.complete = null;
    }

}

module.exports = {Tarea}