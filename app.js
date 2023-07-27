let myLibrary = [];

function Book(title, author, numberOfPages, read) {
  this.title = title
  this.author = author
  this.numberOfPages = numberOfPages
  this.read = read
}

function addBookToLibrary(title, author, numberOfPages, read) {
    let book1 = new Book(title, author, numberOfPages, read)
    myLibrary.push(book1)
}

addBookToLibrary("LOTR", 'Tolkien', 900, true)

addBookToLibrary("Harry Potter", "JK Rowling", 800, false)

console.log(myLibrary)

for(const book of myLibrary) {
   const books = document.getElementById("Books")
   var table = document.createElement("table");
   books.appendChild(table);
   var tr = table.insertRow()
   var td = tr.insertCell();
   td.innerText = book.title;
   var td = tr.insertCell();
   td.innerText = book.author
   var td = tr.insertCell();
   td.innerText = book.numberOfPages
   var td = tr.insertCell();
   td.innerText = book.read
}

var formOpen = false

document.getElementById("newBook").addEventListener('click', function(){
    var form = document.getElementById("form")
    form.classList.remove("formClosed")
})

function bookSubmission(title, author, numberOfPages, read){
    
}