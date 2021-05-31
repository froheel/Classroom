import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Assigned from "../components/assigned.js";
import Missing from "../components/missing.js";
import Done from "../components/done.js";

function Todolist() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div classNam="mx-4 mb-4">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              className={currentPage === 1 ? "bg-primary text-light" : ""}
              onClick={() => setCurrentPage(1)}
            >
              Assigned
            </Nav.Link>

            <Nav.Link
              className={currentPage === 2 ? "bg-primary text-light" : ""}
              onClick={() => setCurrentPage(2)}
            >
              Missing
            </Nav.Link>

            <Nav.Link
              className={currentPage === 3 ? "bg-primary text-light" : ""}
              onClick={() => setCurrentPage(3)}
            >
              Done
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="mx-3 my-3">
        <Row>
          <Col>
            <div className="text-center">
              {currentPage === 1 && <Assigned />}
              {currentPage === 2 && <Missing />}
              {currentPage === 3 && <Done />}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Todolist;
