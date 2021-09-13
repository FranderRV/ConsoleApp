const {v4:uuidv4} = require('uuid')
class Task{

    id = 0;
    desc = '';
    complete = null;

    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.complete = null;
    }

}

module.exports = Task