//ES6
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`
    }
}

//subclass Magazine
class Magazine extends Book() {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = months;
    }
}

//Instantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);