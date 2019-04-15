import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import data from "./data.json";

class App extends Component {
  render() {
    return (
      <div>

        <Header />
        <Container/>
          
        <Container/>

        <Footer/>

      </div>
    );
  }
}


export default App;
