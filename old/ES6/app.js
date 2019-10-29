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


     /**
      * Part 8 Set
      */

      //set is used to stroe the unique values in the array 

      var setValues = new Set(["index1", "index2", "index1", "index3"])
      console.log("Set values "+ setValues)

      for (var setValue of setValues){
          console.log("Set value "+ setValue)
      }

      //add the values to set
      setValues.add("Index4")

      //delete the values form set 
      setValues.delete("index2")

      //search the values form set 
      console.log("Is Set contain value of index2 "+ setValues.has("index2"))

      /**
       * Part 9 Static Functions and getters and setters
       */

       //static class 

       class staticClass{

        //static key words define the static class and function; so we can access the method without creating the staticClass object
           static checkStaticClass(){
               console.log("This is the static class")
           }
       }

       staticClass.checkStaticClass()

       //getters and setters
       class studentClass{
           //this is the constructor
           constructor(name){
               //setting the name to private variable of studentClass
               this._name = name
           }

           //set keyword is used to notifity the setters
           set studentName (name){
               this._name = name
           }

           //get keyword is used to notify the getters
           get studentName() {
               return this._name
           }
       }

       let studentObj = new studentClass("Achsuthan")

       //get the values to studetObject
       console.log("Student Name "+studentObj.studentName)
 
       //set the values to stduentObject
       studentObj.studentName = "Mahendran"

        //get the values to studetObject
        console.log("Student Name "+studentObj.studentName)

        /***
         * Part 10 Symbols
         */

         //symbol is unique 

         let sym = Symbol()
         console.log("Sysmbol "+ sym.toString())

         let sym1 = Symbol("hello")
         let sym2 = Symbol("hello")
         
         console.log(sym1 === sym2)

         /**
          * Part 11 Promis and httpRequest
          */

          //promis is used to promiss the http call to return the value when the request any response (Success/Fail)

          function httpRequest(url) {
              return new Promise(function (resolve,reject) {
                  var request = new XMLHttpRequest()
                  request.open('GET',url)

                  request.onload = function(){
                    if (request.status == 200 ) {
                        console.log("Reuqest Success")
                        resolve(request.response)
                    }
                    else {
                        reject(Error(request.statusText))
                        console.log("Request failed")
                    }
                  }
                  request.onerror() = function () {
                      reject(Error("Network Issues"))
                  }
                  request.send()

              });
          }

          httpRequest("https://randomuser.me/api/").then(function(response){
              console.log("Success")
          },function(error){
              console.log("Error there "+error.toString())
          });


