let myLibrary = [];

function Book() {
    const book = {
        property: 'Value!',
        otherProperty: 77,
        "obnoxious property": function() {
       }
      }
}

function addBookToLibrary(i) {
    const newBook = document.createElement("div");
    newBook.setAttribute("data-index", i)

    const title = document.getElementById("title").value;
     
    const author = document.getElementById("author").value;

    const pages = document.getElementById("pages").value;

    const read = document.getElementById("read").value;

    container.appendChild(newBook);
    newBook.classList.add("newBook");

    newBook.appendChild(title)
}