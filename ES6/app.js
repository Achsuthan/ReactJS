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

   /**
    * Part 6 dots 
    */

    //dotes is used to access convet the muliple values to array

    //Example 1
    function addMoney(...money) {
        console.log("money Array " + money)
        let balance = 0
        for (let i = 0; i < money.length; i++) {
            balance += money[i]
        }
        return balance
    }
    console.log("Money added to account " + addMoney(100,40,50,60,80))

    //Example 2
    let numbers = [12,34,25,345,622]
    console.log("Maximum Number "+ Math.max(...numbers))


    /**
     * Part 7 Maps 
     */

     let students =  {
         name : "Achsuthan",
         IT : "IT14108150"
     }
     let resutls = {
         mark1 : 34,
         mark2 : 99
     }

     let map = new Map()
     map.set("students",students)
     map.set("marks",resutls)

     console.log("Map Object  "+ map)

     //it will print the key objects
     console.log("Map Keys" + map.keys())

     //get all the keys it will print all the keys
     for(let key of map.keys()) {
         console.log("Keys "+ key)
     }

     //This is will print the object
     console.log("Values in Student " + map.get('students'))
     
     //This will print the student name
     console.log("Student Name "+ map.get("students").name)


     //delet the details form map object
     map.delete("students")
     console.log("After Deleted "+map.size)
