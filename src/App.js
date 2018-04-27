import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks";
import AddBook from "./AddBook";

import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    searchBooks: [],
    books: [],
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      // console.log(this.state);
    });
  }

  moveBook = (book, clickedCategory) => {
    var updated_books = [...this.state.books];
    let bookIsInLibrary = false;
    for (var tmp_book of updated_books) {
      if (tmp_book.id === book.id) {
        tmp_book.shelf = clickedCategory;
        bookIsInLibrary = true;
        break
      } 
    }

    if(!bookIsInLibrary) {
      book.shelf = clickedCategory
      updated_books.push(book);
    }

    this.setState({ books: updated_books });
  };

  setShowSearchPageToFalse = () => this.setState({ showSearchPage: false });
  setShowSearchPageToTrue = () => this.setState({ showSearchPage: true });

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Route
            path="/search"
            render={({ history }) => (
              <AddBook
                onSetShowSearchPageToFalse={this.setShowSearchPageToFalse}
                onMoveBook={this.moveBook}
                onAddBook={() => history.push("/")}
                booksInLibrary={this.state.books}
              />
            )}
          />
        ) : (
          <Route
            exact
            path="/"
            render={() => (
              <ListBooks
                books={this.state.books}
                onMoveBook={this.moveBook}
                onSetShowSearchPageToTrue={this.setShowSearchPageToTrue}
              />
            )}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
