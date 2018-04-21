import React, { Component } from "react";

class ListBooks extends Component {
  render() {
    console.log(this.props.books);
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books
                .filter(book => book.shelf === "currentlyReading")
                .map(book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${
                              book.imageLinks.smallThumbnail
                            }")`
                          }}
                        />
                        <div className="book-shelf-changer">
                          <select
                            onChange={e => {
                              this.props.onMoveBook(book, e.target.value);
                            }}
                          >
                            <option value="none" disabled>
                              Move to...
                            </option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      {book.authors.map(author => (
                        <div className="book-authors" key={author}>
                          {author}
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
            </ol>
          </div>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books
                .filter(book => book.shelf === "wantToRead")
                .map(book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${
                              book.imageLinks.smallThumbnail
                            }")`
                          }}
                        />
                        <div className="book-shelf-changer">
                          <select
                            onChange={e => {
                              this.props.onMoveBook(book, e.target.value);
                            }}
                          >
                            <option value="none" disabled>
                              Move to...
                            </option>
                            <option key={book.id} value="currentlyReading">
                              Currently Reading
                            </option>
                            <option selected="selected" value="wantToRead">
                              Want to Read
                            </option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      {book.authors.map(author => (
                        <div className="book-authors" key={author}>
                          {author}
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
            </ol>
          </div>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books
                .filter(book => book.shelf === "read")
                .map(book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${
                              book.imageLinks.smallThumbnail
                            }")`
                          }}
                        />
                        <div className="book-shelf-changer">
                          <select
                            onChange={e => {
                              this.props.onMoveBook(book, e.target.value);
                            }}
                          >
                            <option value="none" disabled>
                              Move to...
                            </option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      {book.authors.map(author => (
                        <div className="book-authors" key={author}>
                          {author}
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
