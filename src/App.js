import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import Search from './Search'
import { Route } from 'react-router-dom'

// class for the main app
class BooksApp extends React.Component {
  state = {
    books: []
  }

// updating the book shelf
  updateShelf = (thisBook, shelf) => {
    BooksAPI.update(thisBook, shelf).then(() => {
      this.setState(prev => {
        let addBook = true;
        prev.books.forEach(book => {
          if(thisBook.id === book.id)
              addBook = false;
        })
        if(addBook)
            prev.books.splice(1, 0, thisBook);
        return ({
          books: prev.books.map(book => {
            if(book.id === thisBook.id)
                book.shelf = shelf;
            return book;
          })
          // if no shelf don't display the books
          .filter(b => b.shelf !== "none")
        })
      })
    })
  }


// get all the data of the book and then add it to state
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }


  render() {
    const { books } = this.state;

    return (
      <div className="app">
          <Route exact path="/" render={()=><BookList books={books} updateShelf={this.updateShelf} />} />
          <Route path="/search" render={()=><Search currentBooks={books} updateShelf={this.updateShelf} />} />
      </div>
    )
  }
}

export default BooksApp
