class Demo{
    constructor(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;
    }

   dateOfBith() {
       console.log(`${this.name} is born in ${this.age} he is a ${this.job}`);
  }
}
let ob1 = new Demo('Rokib',22,'Student');
ob1.dateOfBith();