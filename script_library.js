
function filterBooks(category) {
    const allBooks = document.querySelectorAll('.ebook');

    allBooks.forEach(book => {
        book.style.display = 'none';
    });

    if (category === 'all') {
        allBooks.forEach(book => {
            book.style.display = 'flex';
        });
    } else {
        const filteredBooks = document.querySelectorAll(`.${category}`);
        filteredBooks.forEach(book => {
            book.style.display = 'flex';
        });
    }
}



function searchEbooks() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const allBooks = document.querySelectorAll('.ebook');

    allBooks.forEach(book => {
        const bookTitle = book.querySelector('h1').textContent.toLowerCase();
        const bookLink = book.querySelector('a').textContent.toLowerCase();

        if (bookTitle.includes(searchInput) || bookLink.includes(searchInput)) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    });
}

document.getElementById("searchInput").addEventListener("input", searchEbooks);

