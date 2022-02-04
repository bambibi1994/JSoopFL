//constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//prototype getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by 
        ${this.author} in ${this.year}`
}

//create new function
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${this.year} years old`;
}

//Resive/ Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revise = true;
}

//instatiate an object
const book1 = new Book('Book one', 'John Doe', '2013');
const book2 = new Book('Book one', 'John Doe', '2013');

console.log(book2.getSummary());