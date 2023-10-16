class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.available = true;
    }
    displayDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Availability: ${this.available ? 'Available' : 'Not Available'}`);
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(ISBN) {
        this.books = this.books.filter(book => book.ISBN !== ISBN);
    }

    listBooks() {
        this.books.forEach(book => book.displayDetails());
    }

    searchBooks(query) {
        return this.books.filter(book => {
            return (
                book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.author.toLowerCase().includes(query.toLowerCase()) ||
                book.ISBN.includes(query)
            );
        });
    }

    checkOutBook(ISBN) {
        const book = this.books.find(book => book.ISBN === ISBN);
        if (book && book.available) {
            book.available = false;
            console.log(`${book.title} has been checked out.`);
        } else if (book && !book.available) {
            console.log(`${book.title} is already checked out.`);
        } else {
            console.log('Book not found in the library.');
        }
    }

    checkInBook(ISBN) {
        const book = this.books.find(book => book.ISBN === ISBN);
        if (book && !book.available) {
            book.available = true;
            console.log(`${book.title} has been checked in.`);
        } else if (book && book.available) {
            console.log(`${book.title} is already available.`);
        } else {
            console.log('Book not found in the library.');
        }
    }
}

const container = document.getElementById("container")
const btnShowAll = document.getElementById('b1')
const btnAddNew = document.getElementById('b2')
const btnSearch = document.getElementById('b3')



function onShowAll() {
    clear()
    btnShowAll.classList.add('text-white', 'bg-[#4d13d1]', 'rounded-lg')
    let page = document.createElement('div')
    let h2 = document.createElement('h2')
    h2.textContent = "Showing all books"
    page.appendChild(h2)
    container.appendChild(page)
}

function onAddNew(){
    clear()
    btnAddNew.classList.add('text-white', 'bg-[#4d13d1]', 'rounded-lg')
    let page = document.createElement('div')
    let h2 = document.createElement('h2')
    h2.textContent = "Adding new book"
    page.appendChild(h2)
    container.appendChild(page)
}

function onSearch(){
    clear()
    btnSearch.classList.add('text-white', 'bg-[#4d13d1]', 'rounded-lg')
    let page = document.createElement('div')
    let h2 = document.createElement('h2')
    h2.textContent = "Searching book"
    page.appendChild(h2)
    container.appendChild(page)
}

function clear(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    b1.classList.remove('text-white', 'bg-[#4d13d1]', 'rounded-lg')

    b2.classList.remove('text-white', 'bg-[#4d13d1]', 'rounded-lg')

    b3.classList.remove('text-white', 'bg-[#4d13d1]', 'rounded-lg')
}

onShowAll()