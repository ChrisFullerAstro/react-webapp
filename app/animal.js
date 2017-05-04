class Animal {
  constructor(name, height) {
    this.name = name
    this.height = height
  }
  hello() {
    console.log(`Hi! I'm ${this.name} from the animal kingdom`)
  }
}

class Lion extends Animal {
  constructor(name, height, color) {
    super(name, height);
    this.color = color
  }

  hello(){
    console.log(`Hi! I'm ${this.name} I'm a tool`)
  }
}

export default Animal;
