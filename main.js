// # JS-Object

// 1. Program and observe the following requirements:  
//   - Create a null object and set its variable name as user; 
//   - Add a name attribute and set its value as John; 
//   - Add a surname attribute and set its value as Mike; 
//   - Modify the value of name attribute as Peter; 
//   - Delete name attribute of user. 

var user = {  
    doRequirement : function(){
        user.name = "John"
        console.log(user.name); //Display name John
        user.surname = "Mike"
        console.log(user.surname); //Display surname Mike
        user.surname = "Peter"
        console.log(user.surname); //Display modified name Peter
        delete user["name"];
        console.log(user.name+' '+user.surname); //Display undefined Peter since name was deleted
    }
  }
user.doRequirement();
 
// 2. Program and observe the following requirements: calculate how many pieces of fruit there are in the fruit object and the output should be 50. 

// ```
var fruit = {
apple: 20,
pear: 20,
peach: 10
}
// ```
// write your code here..
  fruit.getCount = function (){
    var totalFruits = this.apple + this.pear + this.peach
    return totalFruits;
  }
console.log(fruit.getCount());

// ## Requirements
// // Create a js document and complete the above requirements.
