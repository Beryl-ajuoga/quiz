//  one()
//  console.log(value)
//  var value=2 
//  console.log(value)

// Write a js programme to check the grades of a student in exams 
// eg if student has marks between 90-100, you will print out the 
// student's grade in A 
// 90-100 =A
// 70-89=B
//60-69 =c
// 50-59= d
//0-49 e

function Grades(score) {
    var marks;
  
    switch(true) {
      case (score <= 100 && score >= 90):
         marks = 'A';
          break;
      case (score <= 89 && score >= 80):
          marks = 'B';
           
      case (score <= 79 && score >= 70):
          marks = 'C';
        
         case (score <= 69 && score >= 60):
          marks = 'D';
           
      case (score <= 59 && score >= 0):
          marks = 'F';
          break
  }
  
    return Grades(score);
  }
     
let fruits=["mangoes" , "apples", "bananas"]
console.log('fruits array: ',fruits)

let vehicles=new Array("bus" ,"matatu","probox")
console.log(vehicles)

let arr=new Array(4);
console.log(arr);

let countries=Array.of("uganda","kenya","somali")
console.log(countries)

var myArray=["exuberant","destruction","relocation",'exaggerated']
myArray.unshift("exuberant")
myArray.unshift("destruction")
myArray.unshift("relocation")
myArray.unshift("exaggerated")

console.log(myArray)





