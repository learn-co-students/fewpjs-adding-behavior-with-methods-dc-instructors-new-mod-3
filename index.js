// Your code here
class Dog {
  constructor(name, sex){
    this.sex = sex
    this.name = name
  }

  speak(){
    return `${this.name} says woof!`
  }
}

class Cat {
  constructor(name, sex){
    this.sex = sex
    this.name = name
  }

  speak(){
    return `${this.name} says meow!`
  }
}

class Bird {
  constructor(name, sex){
    this.sex = sex
    this.name = name
  }

  speak(){
    if(this.sex === 'female'){
      return `${this.name} says squawk!`
    }
    return `It's me! ${this.name}, the parrot!`
  }
}
