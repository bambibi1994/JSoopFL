//Object of protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${this.year} years old`;
    }
}

//create Object properties outside onbject
const book1 = Object.create(bookProtos);
// //1st way
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = '2013';

//2nd way
const Book1 = Object.create(bookProtos, {
    title: {value: 'Book One'},
    author: {value: 'John Doe'},
    year: {value: '2013'}
})

console.log(book1);