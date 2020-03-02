import React, { Component } from "react";
import { toast } from "react-toastify";
import { List } from "../components/List";
import { Container } from "../components/Grid";
import Book from "../components/Book";
import API from "../utils/API";

class SaveBook extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
      API.getSavedBooks()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err))
  }

  handleDeleteBook = async (id) => {
    const originalBooks = this.state.savedBooks;
    try {
      await API.deleteBook(id)
      .then(toast.error("Book has been deleted"))
      .then(res => this.getSavedBooks());
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
      toast.error("Book deleted");
      this.setState({ savedBooks: originalBooks });
    }
  };

  render() {
    const { length: count } = this.state.savedBooks;
    return (
      <Container>
      <Container fluid>
        <h2 className="heading-subtitle mx-sm-3 mb-2 text-center">
                  Books in the database: {count}
                </h2>
          {this.state.savedBooks.length ? (
            <List>
            {this.state.savedBooks.map(book => (
            <Book
            key={book._id}
                    title={book.title}
                    subtitle={book.subtitle}
                    link={book.link}
                    authors={book.authors.join(", ")}
                    description={book.description}
                    image={book.image}
                    Button={() => (
                      <button
                        onClick={() => this.handleDeleteBook(book._id)}
                        className="btn btn-secondary ml-2"
                      >Delete Book</button>
                      )}
                      />
                    ))}
        </List>
          ) : (
            <h2 className="heading-subtitle mx-sm-3 mb-2 text-center">
                  No books in the database yet.
                </h2>
            )
          }
      </Container>
      </Container>
    )
  }
}

export default SaveBook;