import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FacultyProvider } from "./FacultyContext";
import FacultyList from "./FacultyList";
import AddFaculty from "./AddFaculty";
import UpdateFaculty from "./UpdateFaculty";

function App() {
  return (
    <FacultyProvider>
      <Router>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Faculty List</Link> |{" "}
          <Link to="/add">Add Faculty</Link>
        </nav>

        <Routes>
          <Route path="/" element={<FacultyList />} />
          <Route path="/add" element={<AddFaculty />} />
          <Route path="/update/:id" element={<UpdateFaculty />} />
        </Routes>
      </Router>
    </FacultyProvider>
  );
}

export default App;
