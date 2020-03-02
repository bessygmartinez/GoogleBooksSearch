import React, { Component } from "react";
import { ToastContainer, Slide } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
import SaveBooks from "./pages/SaveBooks";
import SearchBooks from "./pages/SearchBooks";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>

        <main role="main" className="container">
          <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
            id="11"
            role="alert"
            transition={Slide}
            style={{"zIndex": "11000"}}
          />
          <Jumbotron />
          <Switch>
            <Route path="/search" component={SearchBooks} />
            <Route path="/saved" component={SaveBooks} />
            {/* <Route path="/not-found" component={NotFound} /> */}
            <Redirect from="/" exact to="/search" />
            {/* <Redirect to="/not-found" /> */}
          </Switch>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
