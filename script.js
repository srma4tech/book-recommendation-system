let currentPage = 1;
const resultsPerPage = 8;

const bookResultsContainer = document.getElementById("bookResults");
const loadMoreButtonContainer = document.getElementById("loadMore");

// Hide the "Load More" button by default
loadMoreButtonContainer.style.display = "none";

const fetchBooks = async (genre) => {
    const response = await fetch(`https://openlibrary.org/search.json?subject=${genre}&page=${currentPage}`);
    const data = await response.json();
    return data;
};

const displayBooks = (books) => {
    books.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const bookImage = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/100x150?text=No+Image";

        bookCard.innerHTML = `
            <img src="${bookImage}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>by ${book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
            <p class="rating">Rating: N/A</p>
            <p class="description">${book.first_sentence ? book.first_sentence[0] : "No description available."}</p>
            <div class="book-actions">
                <button onclick="readOnline('${book.key}')">Read Online</button>
                <button onclick="downloadBook('${book.key}')">Download</button>
            </div>
        `;

        bookResultsContainer.appendChild(bookCard);
    });
};

const readOnline = (key) => {
    window.open(`https://openlibrary.org${key}`, "_blank");
};

const downloadBook = (key) => {
    alert("This feature is not implemented yet. Simulating a download.");
    // You can replace this with actual download functionality.
};

const loadBooks = async () => {
    const genre = document.getElementById("genre").value.trim();
    if (genre) {
        const data = await fetchBooks(genre);

        // Clear previous results and reset the "Load More" button visibility
        if (currentPage === 1) {
            bookResultsContainer.innerHTML = "";
        }

        if (data.docs.length > 0) {
            displayBooks(data.docs);

            // Show "Load More" button if there are more results
            if (data.docs.length === resultsPerPage) {
                loadMoreButtonContainer.style.display = "block";
            } else {
                loadMoreButtonContainer.style.display = "none";
            }
        } else {
            // Hide "Load More" button if no results are found
            loadMoreButtonContainer.style.display = "none";
            bookResultsContainer.innerHTML = `<p>No results found for "${genre}".</p>`;
        }
    }
};

const loadMoreBooks = async () => {
    currentPage++;
    const genre = document.getElementById("genre").value.trim();
    const data = await fetchBooks(genre);

    if (data.docs.length > 0) {
        displayBooks(data.docs);

        // Hide "Load More" button if fewer results are returned than requested
        if (data.docs.length < resultsPerPage) {
            loadMoreButtonContainer.style.display = "none";
        }
    } else {
        loadMoreButtonContainer.style.display = "none";
    }
};

document.getElementById("searchBtn").addEventListener("click", () => {
    currentPage = 1;
    loadBooks();
});
