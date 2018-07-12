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
 * Part 3 This keyword and Dynamic Objects
 */

 var user = {
     FirstName : "Achsuthan",
     LastName : "Mahendran",
     Age : 26, 
     getAge:  function() {
         console.log(this.Age);
     },
     getFullName : function() {
         console.log(this.FirstName + " " +  this.LastName)
     }
 }

 user.getFullName()
 user.getAge()

 /**
  * Part 4 How to use the api responce to object
  */
  //create dynamic object with name come from API 

  let marks = "score" //this score is later asign to student object if we want to access marks, should use Objectname.[marks]

  let student = {
      name : "Test",
      score : 99
  }

  console.log("Students marks "+ student.score)
  console.log("Students marks "+ student[marks])

  /**
   * Part 5 Loops for of loop
   */

   let phones = ["iPhone", "Samsung", "MI", "Nokia"]

   for (let phone of phones) {
       console.log("Phone Type " + phone)
   }