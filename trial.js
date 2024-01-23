 const library = [
    {
        title:"grieve child",
        author:"kod",
        status:{
            own:true,
            read:false,
            reading:false
        }
        
    },

    {
        title:"linux",
        author:"david",
        status:{
            own:true,
            read:false,
            reading:false
        }
        
    },


    {
        title:"python",
        author:"mixhel",
        status:{
            own:true,
            read:false,
            reading:false
        }
        
    },


];

console.log(library[1])

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

console.log(library[0]);
console.log(library[1]);
console.log(library[2]);

// delete an object
delete library.title
console.log(library)

// const{title:first_book}=library[0];
// console.log(library[0].title)

library.title = "first_book"
console.log(library)





