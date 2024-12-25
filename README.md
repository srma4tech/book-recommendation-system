# Book Recommendation System
https://srma4tech.github.io/book-recommendation-system/

## Overview
The Book Recommendation System is a web application that allows users to search for books based on their favorite genre. It fetches book data from the Open Library API and displays the results in a user-friendly interface. Users can load more results, view book details, and access links to read or simulate downloading the book.

---

## Features
- Search books by genre (e.g., Fiction, Mystery).
- Paginated results with "Load More" functionality.
- View book details such as title, author, rating, and description.
- Placeholder image for books without a cover image.
- Options to read online or simulate book downloads.
- Responsive design for various screen sizes.

---

## Technologies Used
### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)

### APIs
- [Open Library API](https://openlibrary.org/developers/api)

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- A modern web browser (e.g., Chrome, Firefox, Edge).
- Code editor (optional, e.g., VS Code).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/book-recommendation-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd book-recommendation-system
   ```
3. Open the `index.html` file in your preferred browser.

---

## File Structure
```
book-recommendation-system/
├── index.html      # Main HTML file
├── styles.css      # CSS file for styling
├── script.js       # JavaScript file for functionality
└── README.md       # Documentation file
```

---

## Usage
1. Open the application in a browser.
2. Enter a genre in the search box (e.g., Fiction).
3. Click the "Search" button to fetch results.
4. Scroll through the displayed books. Click "Load More" if available to fetch additional results.
5. Use the "Read Online" button to view the book on Open Library or "Download" to simulate a download.

---

## Known Issues
- The "Load More" button currently appears before fetching the first set of results. 
  - **Solution:** Ensure the button is dynamically displayed only when more results are available. Update the visibility condition in `script.js`.
- "Download" functionality is simulated and not implemented.

---

## Future Enhancements
- Implement actual book download functionality.
- Add user login and personalized book recommendations.
- Improve search capabilities (e.g., search by author or title).

---

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add feature description'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the Learn MIT License. See the `LICENSE` file for details.

---

## Contact
For any queries or issues, contact:
- **Email:** [sachin.aem@outlook.com](mailto:sachin.aem@outlook.com)

---

## Acknowledgments
- Open Library for providing the API.
- Inspiration from similar book recommendation projects.
