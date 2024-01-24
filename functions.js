function greetings(){
    console.log("give your heart to me not the black stars")
}

greetings();


function addNumbers(a,b){

    console.log(a+b)
}
addNumbers(2,4);


function rizz(name){
    console.log(`give your hert to me not to ${name}`)
}

rizz("him")


function sub(a,b){
    return a-b;
}

console.log(sub(6,1));


// function checkRegister(user){
//     return user + " has registered "
// }

// console.log(checkRegister("kod"));


function checkRegister(user){
   if(!user){
    user = "Bot"
   }


}

console.log(checkRegister());



function enter_number(number){
    if(!number){
     number = 0
    }
 
 }
 
 console.log(enter_number());


 const car={
    color:"red",
    engine:"v12",
 }


 function my_cars(car){
    return `my cars color is ${car.color} and it has ${car.engine} engine`
 }
 console.log(my_cars(car))


 const person1 = {
    Name:"kod",
    age:23
 }

 const person2 = {
    Name:"joy",
    age:20
 }
 const person3 = {
    Name:"peace",
    age:18
 }


 function myPerson(who){
    return `please tell me about your self. MY name is ${who.Name} and am ${who.age} years old`
 }
 console.log(myPerson(person1))
 console.log(myPerson(person2))
 console.log(myPerson(person3))

