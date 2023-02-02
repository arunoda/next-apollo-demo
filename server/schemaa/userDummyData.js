
var casual = require('casual');

// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism
// var sentence = casual.sentence;

// Generate random city name
// var city = casual.city;

// Define custom generator
casual.define('user', function() {
    let data=[]
    for(let i=0;i<2000;i++){
        data.push( {
            name: casual.name,
            address: casual.address, 
            email: casual.email,  
            phone: casual.phone
        })}
    return data;
});

var user = casual.user;
module.exports=casual.user;