import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Appbar from "./layout/Appbar";
import BooksList from "./components/BooksList"
import AddBook from "./components/AddBook"
import EditBook from "./components/EditBook"

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />
        <Routes>
          <Route exact path="/" element={<BooksList />} />
          {/* <Route exact path="/addBook" element={<AddBook />} /> */}
          {/* <Route exact path="/editBook/:titleToUpdate" element={<EditBook />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
