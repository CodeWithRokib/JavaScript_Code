let myCustomerObj = {
    name: "Rokibul Hasan Rokib",
    age: 21,
    job: "Student",
    anotherObj:{
        name: "Hasan Rokib",
        value:function(){
            console.log(`My name is: `+this.name);
        }
    }
}
myCustomerObj.anotherObj.value();