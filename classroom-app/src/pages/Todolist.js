import {Navbar, Nav, Row, Col, Dropdown} from "react-bootstrap";
import { useState } from "react";
import Assigned from "../components/TodoListComponents/assigned.js";
import Missing from "../components/TodoListComponents/missing.js";
import Done from "../components/TodoListComponents/done.js";
import Navbar1 from '../components/Sidebar_Inside/Sidebar';

function Todolist() {
  const [currentOption, setCurrentOption] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
    <Navbar1/>
    <div classNam="mx-4 mb-4">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              className={currentPage === 1 ? "bg-success text-light" : ""}
              onClick={() => setCurrentPage(1)}
            >
              Assigned
            </Nav.Link>

            <Nav.Link
              className={currentPage === 2 ? "bg-success text-light" : ""}
              onClick={() => setCurrentPage(2)}
            >
              Missing
            </Nav.Link>

            <Nav.Link
              className={currentPage === 3 ? "bg-success text-light" : ""}
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
    </>
  );
}

export default Todolist;
