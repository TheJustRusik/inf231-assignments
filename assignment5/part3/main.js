class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.available = true;
    }
    displayDetails() {
        return (`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Availability: ${this.available ? 'Available' : 'Not Available'}`);
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
        let res = []
        this.books.forEach(book => res.push(book.displayDetails()));
        return res
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
            return (`${book.title} has been checked out.`);
        } else if (book && !book.available) {
            return (`${book.title} is already checked out.`);
        } else {
            return ('Book not found in the library.');
        }
    }

    checkInBook(ISBN) {
        const book = this.books.find(book => book.ISBN === ISBN);
        if (book && !book.available) {
            book.available = true;
            return (`${book.title} has been checked in.`);
        } else if (book && book.available) {
            return (`${book.title} is already available.`);
        } else {
            return ('Book not found in the library.');
        }
    }
}

const container = document.getElementById("container")
const btnShowAll = document.getElementById('b1')
const btnAddNew = document.getElementById('b2')
const btnSearch = document.getElementById('b3')

let library = new Library

function onShowAll() {
    clear()
    btnShowAll.classList.add('text-white', 'bg-[#4d13d1]', 'rounded-lg')
    let page = document.createElement('div')
    let h2 = document.createElement('h2')
   
    h2.textContent = "All books"
    page.appendChild(h2)
    
    let temptemp = library.listBooks()
    temptemp.forEach(element => {
        let p = document.createElement('p')
        p.textContent = element
        page.appendChild(p)
    });

    let isbn_in = document.createElement('input')
    let isbn_res = document.createElement('p')
    isbn_in.type = 'text'
    isbn_in.placeholder = "Books ISBN"
    let btn_i = createButton("Check in")
    let btn_o = createButton("Check out")
    btn_o = createButton("Check out")
    btn_o.addEventListener('click', function () {
        isbn_res.textContent = library.checkOutBook(isbn_in.value)
        if (isbn_res.textContent.trim().includes("has been checked out")){
            onShowAll()
        }
    })
    btn_i.addEventListener("click", function () {
        isbn_res.textContent = library.checkInBook(isbn_in.value)
        if (isbn_res.textContent.trim().includes("checked in")){
            onShowAll()
        }
    })
    page.appendChild(isbn_in)
    page.appendChild(btn_o)
    page.appendChild(btn_i)
    page.appendChild(isbn_res)
    

    container.appendChild(page)

}

function onAddNew(){
    clear()
    btnAddNew.classList.add('text-white', 'bg-[#4d13d1]', 'rounded-lg')
    let page = document.createElement('div')
    let h2 = document.createElement('h2')
    let title = document.createElement('input')
    title.type = "text"
    title.placeholder = "Title"
    let author = document.createElement('input')
    author.type = "text"
    author.placeholder = "Author"
    let isbn = document.createElement('input')
    isbn.type = "text"
    isbn.placeholder = "ISBN"
    
    
    h2.textContent = "Adding new book"
    page.appendChild(h2)
    page.appendChild(title)
    page.appendChild(author)
    page.appendChild(isbn)
    let btn = createButton("ADD")
    btn.addEventListener("click", function(){
        if (title.value.trim() === '' || author.value.trim() === '' || isbn.value.trim() === ''){
            alert("NOT FULL INFO")
        }else{
            let book = new Book(title.value, author.value, isbn.value)
            library.addBook(book)
            title.value = ""
            author.value = ""
            isbn.value = ""
        }
    })
    page.appendChild(btn)

    container.appendChild(page)
}

function onSearch(){
    clear()
    btnSearch.classList.add('text-white', 'bg-[#4d13d1]', 'rounded-lg')
    let page = document.createElement('div')
    let h2 = document.createElement('h2')
    h2.textContent = "Showing all books"
    page.appendChild(h2)
    let btn = createButton("Search")
    let searchfild = document.createElement('input')
    let searchResult = document.createElement('div')
    searchfild.type = "text"
    searchfild.placeholder = "Book name or Author or ISBN"
    btn.addEventListener('click', function(){
        while(searchResult.lastChild){
            searchResult.removeChild(searchResult.lastChild)
        }
        let res = library.searchBooks(searchfild.value)
        res.forEach(element => {
            let tmp = document.createElement('p')
            tmp.textContent = element.displayDetails()
            searchResult.appendChild(tmp)
        });
    })
    page.appendChild(searchfild)
    page.appendChild(btn)
    page.appendChild(document.createElement('br'))
    page.appendChild(searchResult)

    let isbn_in = document.createElement('input')
    let isbn_res = document.createElement('p')
    isbn_in.type = 'text'
    isbn_in.placeholder = "Books ISBN"
    let btn_i = createButton("Check in")
    let btn_o = createButton("Check out")
    btn_o = createButton("Check out")
    btn_o.addEventListener('click', function () {
        isbn_res.textContent = library.checkOutBook(isbn_in.value)
        if (isbn_res.textContent.trim().includes("has been checked out")){
            onSearch()
        }
    })
    btn_i.addEventListener("click", function () {
        isbn_res.textContent = library.checkInBook(isbn_in.value)
        if (isbn_res.textContent.trim().includes("checked in")){
            onSearch()
        }
    })
    page.appendChild(isbn_in)
    page.appendChild(btn_o)
    page.appendChild(btn_i)
    page.appendChild(isbn_res)

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

function createButton(text){
    let btn = document.createElement('button')
    let p = document.createElement('p')
    let div = document.createElement('div')
    div.classList = "border-4 border-[#4d13d1] rounded-lg"
    div.addEventListener('mouseover', function() {div.classList.add('text-white', 'bg-[#4d13d1]')})
    div.addEventListener('mouseleave', function() {div.classList.remove('text-white', 'bg-[#4d13d1]')})
    p.classList = "text-xl p-2 font-bold"
    p.textContent = text
    div.appendChild(p)
    btn.appendChild(div)
    return btn;
}