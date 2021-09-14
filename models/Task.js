const {v4:uuidv4} = require('uuid')
class Task{

    id = 0;
    desc = '';
    complete = false;

    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.complete = false;
    }

}

module.exports = Task