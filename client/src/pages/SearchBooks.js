import React, { Component } from "react";
import { toast } from "react-toastify";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import { List } from "../components/List/index";
import Book from "../components/Book";


class SearchBooks extends Component {
  state = {
    books: [],
    query: "",
    message: "Search for books via the Google Books API"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //function to control the submit button of the search form 
  handleFormSubmit = event => {
    event.preventDefault();
    toast.info("Searching for your book...", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true
    });
    this.getBooks();
  };

  getBooks =() => {
    API.getBooks(this.state.query)
    .then(res =>
      this.setState({
        books: res.data,
      })
    )
    .catch(() => {
      toast.error("No matches found.", {
        position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true
      });

      this.setState({
        books: [],
        message: "Your search did not match any books."
      });
    });
  };

  handBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    })
    .then(() => this.getBooks());
  };

  render() {
    return (
      <div>
      <Container fluid>
          <Row>
            <Col size="12">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                query={this.state.query}
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <h1>Results</h1>
          {this.state.books.length ? (
          <List>
          {this.state.books.map(book => (
            <Book
            key={book.id}
            title={book.volumeInfo.title}
            subtitle={book.volumeInfo.subtitle}
            link={book.volumeInfo.infoLink}
            authors={book.volumeInfo.authors.join(", ")}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            Button={() => (
              <button
              onClick={() => this.handBookSave(book.id)}
              className="btn mt-4"
              >
                Save
              </button>
            )}
            />
          ))}
          </List>
          ) : (
            <div className="mockup-content">
              <h2 className="heading-title text-center">
                {this.state.message}
              </h2>
            </div>
          )}
        </Container>
        </div>
    );
  }
}
export default SearchBooks;