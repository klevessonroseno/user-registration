const User = class User {
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }
    getName(){
        return this.name;
    }
    setName(_name){
        this.name = _name;
    }
    getAge(){
        return this.age;
    }
    setAge(_age){
        this.age = _age;
    }
}
module.exports = User;