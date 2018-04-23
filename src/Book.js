import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <li key={this.props.book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${
                  this.props.book.imageLinks.smallThumbnail
                }")`
              }}
            />
            <div className="book-shelf-changer">
              <select
                onChange={e => {
                  this.props.onMoveBook(this.props.book, e.target.value);
                  console.log("ahoj");
                }}
              >
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          {this.props.book.authors.map(author => (
            <div className="book-authors" key={author}>
              {author}
            </div>
          ))}
        </div>
      </li>
    );
  }
}

export default Book;
