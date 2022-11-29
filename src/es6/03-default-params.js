//old
function newUser(name, age, country){
    var name = name || 'Benjamin';
    var age = age || 24;
    var country = country || 'PE';
    console.log(name, age, country)
}
newUser()
newUser('evert', 15, 'CO')

//now
function newAdmin(name = 'Benjamin', age = 24, country = 'PE'){
    console.log(name, age, country);
}
newAdmin()
newAdmin('ana', 28, 'PE')