import React from 'react';

// Book Component
const Book = ({ book, updateShelf }) => {
    return (
        <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1)` }}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(event) => updateShelf(book, event.target.value)}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none" selected>None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(" & ")}</div>
              </div>
        </li>

    )
  }

export default Book
