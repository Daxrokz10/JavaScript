class Parent{
    constructor(name){
        this.name = name;
    }
    printMsg(){
        console.log(`your name is ${this.name}`);
    }
}
class Message extends Parent{
    constructor(name){
        super(name);
    }
    getMsg(){
        this.printMsg();
    }
}

const demo = new Message('Neel');

demo.getMsg();
