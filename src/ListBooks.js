import React, { Component } from "react";
import BookShelf from "./BookShelf";

class ListBooks extends Component {
  render() {
    console.log(this.props.books);

    const shelves = {
      currentlyReading: ["Currently Reading", "currentlyReading"],
      wantToRead: ["Want to Read", "wantToRead"],
      read: ["Read", "read"]
    };
    var x = this.onMoveBook;
    console.log(x);
    return (
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
            onMoveBook={this.moveBook}
          />
        ))}
      </div>
    );
  }
}

export default ListBooks;
