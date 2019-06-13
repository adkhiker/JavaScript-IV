// CODE here for your Lambda Classes
class Person {
  constructor(att) {
    this.name = att.name;
    this.age = att.age;
    this.location = att.location;
    this.gender = att.gender;
  }
  speak() {
    return `\nHello, my name is ${this.name}, and I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(insAtt) {
    super(insAtt);
    this.specialty = insAtt.specialty;
    this.favLanguage = insAtt.favLanguage;
    this.catchPhrase = insAtt.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}!`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(stuAtt) {
    super(stuAtt);
    this.previousBackground = stuAtt.previousBackground;
    this.className = stuAtt.className;
    this.favSubjects = stuAtt.favSubjects;
  }
  listsSubjects() {
    return `My favorite subjects are ${this.favSubjects}.`;
  }
  pRAsignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class ProjectManager extends Instructor {
  constructor(pMAtt) {
    super(pMAtt);
    this.gradClassName = pMAtt.gradClassName;
    this.favInstructor = pMAtt.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}.`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

//Data follows
const dan = new Instructor({
  name: "Dan",
  age: "Infinity",
  location: "Denver",
  specialty: "Relentless Debugger",
  favLanguage:
    "JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia",
  catchPhrase: "If you can do the thing, you can get paid to do the thing!"
});

const isaiah = new Student({
  name: "Isaiah",
  age: 18,
  location: "Florida",
  previousBackground: "High School last month",
  className: "Web21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

const kevin = new Student({
  name: "Kevin",
  age: 28,
  location: "California",
  previousBackground: "Table Games Dealer",
  className: "WEB21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

const nisa = new Student({
  name: "Nisa",
  age: 25,
  location: "Ohio",
  previousBackground: "Debt Collector",
  className: "Web21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

const joscelyn = new Student({
  name: "Joscelyn",
  age: 29,
  location: "California",
  previousBackground: "English teacher",
  className: "Web21",
  favSubjects: ["Computer Science", "Philosophy", "English"]
});

const marguel = new ProjectManager({
  name: "Marguel",
  age: "Maybe 26",
  gradClassName: "WEBPT2",
  favInstructor: "Me?",
  location: "California",
  specialty: "React",
  favLanguage: "JavaScript, Python, Elm etc.",
  catchPhrase: "Practice Flex Zombies !!!"
});

const brandon = new ProjectManager({
  name: "Brandon",
  age: "34",
  gradClassName: "WEB18",
  favInstructor: "Professor Lambda",
  location: "Maine",
  specialty: "Redux",
  favLanguage: "JavaScript, C++, Python.",
  catchPhrase: "You shall not pass!"
});

const mary = new ProjectManager({
  name: "Mary",
  age: "24",
  gradClassName: "WEB18",
  favInstructor: "Josh Knell",
  location: "New York",
  specialty: "Express and Node.js",
  favLanguage: "Javascript",
  catchPhrase: "That looks AWESOME"
});

const christian = new ProjectManager({
  name: "Christian",
  age: "32",
  gradClassName: "WEB18",
  favInstructor: "Every Instructor in Lambda",
  location: "Seattle, WA",
  specialty: "Data Structures & Algorithms",
  favLanguage: "JavaScript",
  catchPhrase: "Dont forget your daily commit."
});

const pat = new ProjectManager({
  name: "Pat",
  age: "38",
  gradClassName: "WEB18",
  favInstructor: "Brett Madrid",
  location: "Petaluma, Ca",
  specialty: "Empathetic to the struggle of Redux",
  favLanguage: "JavaScript",
  catchPhrase: "Lets google that together."
});

const darren = new ProjectManager({
  name: "Darren",
  age: "25",
  gradClassName: "WEB18",
  favInstructor: "Josh Knell",
  location: "North Carolina",
  specialty: "React",
  favLanguage: "Javascript",
  catchPhrase: "Gang. Gang."
});

const Austin = new ProjectManager({
  name: "Austin",
  age: "23",
  gradClassName: "WEB18",
  favInstructor: "Josh knell",
  location: "Somewhere",
  specialty: "Java",
  favLanguage: "Java",
  catchPhrase: ":eggplant:"
});

//Testing
/* console.log(`\nAge: ${pat.age}`);

console.log("\n ", pat);

console.log(dan.speak()); */
