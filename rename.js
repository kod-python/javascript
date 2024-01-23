let fname = "kod"
let lname = "viper"
let hobby = "chatting"

const person = {
    first_name:fname,
    last_name:lname,
    hobbies:hobby,
    password:"you are a good student"
}

console.log(person);


// rename keys/properties

delete person.first_name

person,first_name_change = fname

console.log(person)


const updateToperson = {
    ...person,

    new_password:person.password
};

console.log(updateToperson);