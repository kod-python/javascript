// key value pairs

const employee = {
    id:8344334,
    role: "developer",
    ename: "ayiyi",
    age:90,
    task: ["train","code","eat","sleep"]
};

// accessing it with the dit notation
console.log(employee.ename)

// access it with the bracket notation
console.log(employee["ename"])

console.log(employee.task[0])

// update
employee.ename = "kod"
console.log(employee.ename)

// add
employee.salary = 1000;
console.log(employee.salary)

// delete
delete employee.age
console.log(employee.age)

// adding funtion to an object
// you can use this inplace of the employee
employee.intro = function(){
    console.log(`yoo everyone my name is: ${this.ename}`);
}

employee.intro()


const employee2 = {
    "id": 2333333,
    "first name":"elorm"
}

console.log(employee2["id"])

// create a student object amd add the properties with values

const student = {
    "first name":"prince",
    "last name":"viviti",
    "age":53,
    "year":2024,
    "hobbies":["football","tennis","hockey","programing"]
};

console.log(`first name is:${student["first name"]} and last name is:${student["last name"]} and your age is:${student["age"]} and the year you are in now is:${student["year"]}. Your hobiies are:${student["hobbies"]}`)


const student1 = {
    first_name: "prince",
    last_name : "viviti",
    age:53,
    year:2024,
    hobbies:["football","tennis","hockey","programing"]
};


console.log(`my first name is:${student1.first_name} and last name:${student1.last_name} and your age is:${student1.age} years old and the year i am in now is:${student1.year}. Your hobbies are:${student1.hobbies} `);


let car = {
    brand:"honda",
    model:"CRV",
    speed:"220kmp/h",
    color:"grey",
    "engine capacity":"500cc",

    // codeium Refractor |Explain|Generate JSDoc|X
    start: function () {
        console.log("engine has started");
    }
};


// add properties
(car.torque = "smooth"),(car["weight"]= "300kg");


// accessing objects
console.log(car["engine capacity"]);
console.log(car.color);


// remove an objects
delete car.torque

// update property
car.weight = "700kg"

// find the lenght of an object

let number_of_properties = Object.keys(car).length
console.log(number_of_properties);

// add function property

car.stop = function (){
    console.log("engine has stopped")
},

car.start()
car.stop()

// array method of removing or deleteing an item 

car.features = ["brake","shokes","foul"]
let my_car_features = car.features

let index_to_remove = 1

my_car_features.splice(index_to_remove,1)

console.log(my_car_features);

car.features = my_car_features

console.log(car.features)