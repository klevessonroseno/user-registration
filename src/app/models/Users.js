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
const users = new Array(
    new User('Maria', 25),
    new User('José', 28),
    new User('Juliana', 30),
    new User('Bárbara', 27)
);

module.exports = users;