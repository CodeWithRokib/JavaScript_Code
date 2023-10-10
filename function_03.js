function welcomeMsg(name){
    console.log('Welcome Mr. '+name);
    return function options(menu){
        console.log("Do you like "+menu+" Mr. "+name);
    }
}
welcomeMsg("Rokibul Hasan Rokib")("Coffee");