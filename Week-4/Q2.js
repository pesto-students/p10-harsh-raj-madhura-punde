// Create an object called Teacher derived from the Person class, and implement a 
// method called teach which receives a string called subject, and
// prints out:[teacher's name]is now teaching[subject]

var Person = function() {

};
Person.prototype.initialize=function(name,age){
this.name=name;
this.age=age;
}

// TODO: create the class Teacher and a method teach
class Teacher extends Person {
  constructor(value) {
  console.log(value)
    super(value);
  }

  teach(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
  }
}

var me=new Teacher();
// console.log(me);
me.initialize("Neha",45);
me.teach("Jenkins");