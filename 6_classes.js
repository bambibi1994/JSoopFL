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

    getAge() {
        const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${this.year} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revise = true;
    }

    static topBookStore() {
        return 'Barnes & Noble';
    }
}

// instantiate Object
const book1 = new Book('Book One', 'John Doe', ' 2013');

console.log(book1);
//have to call class instead of object.
console.log(Book.topBookStore());