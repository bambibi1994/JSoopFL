// // Primitive
// const s1 = 'Hello';
// console.log(typeof s1);
// //object
// const s2 = new String('Hello');
// console.log(typeof s2);

//book object
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    //function inside object.
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`
    }
};

//get book title
console.log(book1.title);
//see all value of the object as an array.
console.log(object.values(book1));