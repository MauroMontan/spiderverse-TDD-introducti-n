class Spiderman {
  constructor(name, age, actor, movies_count) {
    this.name = name;
    this.age = age;
    this.actor = actor;
    this.movies_count = movies_count;
  }

  getInfo() {
    return `Hi! i am ${this.actor} from ${this.name}`;
  }
}

export default Spiderman;
