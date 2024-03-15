import React, { useState } from "react";
import ClassCard from "./ClassCard";
import classes from "./Classes";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import byulogo from "./img/byulogo.png";
import "./App.css";

const App = () => {
  const [levelFilter, setLevelFilter] = useState("All Levels");
  const [specialtyFilter, setSpecialtyFilter] = useState("All Specialties");
  const [showAdvancedDropdown, setShowAdvancedDropdown] = useState(false);

  const handleLevelSelect = (level) => {
    setLevelFilter(level);
    setSpecialtyFilter("All Specialties"); // Reset specialty whenever a level is selected
    setShowAdvancedDropdown(false); // Close the dropdown if it's open
  };

  const toggleAdvancedDropdown = () => {
    if (levelFilter !== "Advanced") {
      setLevelFilter("Advanced"); // Set level to 'Advanced' when 'Advanced' is clicked
    }
    setShowAdvancedDropdown(!showAdvancedDropdown);
  };

  const handleSpecialtySelect = (specialty) => {
    setSpecialtyFilter(specialty);
    setLevelFilter("Advanced");
    setShowAdvancedDropdown(false); // Close the dropdown after selection
  };

  const filteredClasses = classes.filter((classItem) => {
    return (
      (levelFilter === "All Levels" || classItem.level === levelFilter) &&
      (specialtyFilter === "All Specialties" ||
        classItem.Specialty === specialtyFilter)
    );
  });

  const specialties = classes
    .filter((classItem) => classItem.level === "Advanced")
    .map((classItem) => classItem.Specialty);
  const uniqueSpecialties = [...new Set(specialties)]; // Remove duplicates

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm" fixed="top">
        <Navbar.Brand href="#home">
          <img
            src={byulogo}
            height="30"
            className="d-inline-block align-top"
            alt="BYU Logo"
            style={{ paddingLeft: "20px" }}
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => handleLevelSelect("All Levels")}>
            All
          </Nav.Link>
          <Nav.Link onClick={() => handleLevelSelect("Beginner")}>
            Beginner
          </Nav.Link>
          <Nav.Link onClick={() => handleLevelSelect("Intermediate")}>
            Intermediate
          </Nav.Link>
          <NavDropdown
            title="Advanced"
            id="advanced-nav-dropdown"
            show={showAdvancedDropdown}
            onMouseEnter={() => setShowAdvancedDropdown(true)}
            onMouseLeave={() => setShowAdvancedDropdown(false)}
            onClick={toggleAdvancedDropdown}
          >
            {uniqueSpecialties.map((specialty, index) => (
              <NavDropdown.Item
                key={index}
                onClick={() => handleSpecialtySelect(specialty)}
              >
                {specialty}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar>
      <Container className="margin-top-custom">
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredClasses.map((classInfo, idx) => (
            <Col key={idx}>
              <ClassCard {...classInfo} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
