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

//Magazine object inherite book object properties.
function Magazine(title, author, year, month) {
    //inherite from book
    Book.call(this, title, author, year);
    this.month = month;
}

//inherit prototype of book
//need to push above instantiate
Magazine.prototype = Object.create(Book.prototype);

//instantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

//use magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log(mag1.getSummary());