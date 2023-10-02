function callMyName(name,callback){
    let myAge = 20;
    callback(myAge);
    console.log(`Is is interesting? Yes is is Mr. `+name);
}
function hello(age){
    console.log(`I am passed through argument and my age is: `+age);
}
callMyName('Rokibul Hasan',hello);