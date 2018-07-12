console.log("Hello World")
/**
 * Part 1 Scope
 */
//let keyword can access inside the scope 
//var keyword doesn't have the scope; we can access anywhere 
//constant keyword is not editable but if its an array we can push or pop the values form array


/**
 * Part 2  function and arrow function
 */
//old version of function
function function_1(){
    console.log("This is function_1")
}

//new version of function
var function_2 = () => {
    console.log("This is function_2")
}

//one line function 

var function_3 = () => console.log("This is function_3")

function_1()
function_2()
function_3()


/**
 * Part 3 This keyword
 */

 var user = {
     FirstName : "Achsuthan",
     LastName : "Mahendran",
     Age : 26, 
    //  getAge:  function(){
    //      console.log(this.Age);
    //  },
    //  getFullName : function() {
    //      console.log(this.FirstName + " " +  this.LastName)
    //  }
 }

 user.getFullName()
 user.getAge()

 /**
  * Dynamic Objects
  */