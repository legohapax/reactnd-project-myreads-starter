import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class AddBook extends Component {

  state = {
    query: "",
    searchBooks: []
  };

  updateQuery = query => {
    this.setState(() => ({ query: query }));
    
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            onClick={this.props.onSetShowSearchPageToFalse}
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => {
                console.log("event " + event.target.value)
                this.updateQuery(event.target.value)
                console.log("state " + this.state.query)
                
                //console.log(this.state.searchBooks)
                
                if (this.state.query === "") {
                  // if the query is empty, there should be no displayed books
                  this.setState({ searchBooks: [] })
                } else {
                BooksAPI.search(this.state.query).then(books => {
                  
                  if ( !(books === undefined) || !(books === []) ) {
                    // tests if API has returned data or an error
                      
                    for (let searchedBook of books) {
                      //ensures that all newly searched books are in a none shelf
                      for (let libraryBook of this.props.booksInLibrary) {
                      //ensures that books already in the library are on a correct shelf on search page
                        if (libraryBook.id === searchedBook.id) {
                          searchedBook["shelf"] = libraryBook.shelf
                          break
                        } else {
                          searchedBook["shelf"] = "none"
                        }
                      }
                    }
                    this.setState({ searchBooks: books });
                    //console.log(this.state.searchBooks);
                  } else {
                    this.setState({ searchBooks: [] })
                    } 
                }); 
              }
               
                
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchBooks.map(book => (
              <Book
                key={book.id}
                book={book}
                shelf={book.shelf}
                onMoveBook={this.props.onMoveBook}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default AddBook;
