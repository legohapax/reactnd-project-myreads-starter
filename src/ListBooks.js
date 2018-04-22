import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

class ListBooks extends Component {
  render() {
    console.log(this.props.books);

    const shelves = {
      currentlyReading: ["Currently Reading", "currentlyReading"],
      wantToRead: ["Want to Read", "wantToRead"],
      read: ["Read", "read"]
    };

    return (
      <Route
        exact
        path="/"
        render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {Object.keys(shelves).map(shelf => (
                <BookShelf
                  key={shelf}
                  shelf={shelves[shelf][1]}
                  title={shelves[shelf][0]}
                  books={this.props.books}
                  onShelfChange={() => {
                    this.changeShelf();
                  }}
                  onMoveBook={this.props.onMoveBook}
                />
              ))}
            </div>
            <div className="open-search">
              <Link to="/search" onClick={this.props.onSetShowSearchPageToTrue}>
                Add a book
              </Link>
            </div>
          </div>
        )}
      />
    );
  }
}

export default ListBooks;
