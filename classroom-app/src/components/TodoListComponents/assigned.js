import { Dropdown, ListGroup, Accordion, Card } from "react-bootstrap";
import { useState } from "react";
function Assigned() {
  const [currentOption, setCurrentOption] = useState(1);
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {currentOption === 1 && "All Classes"}
          {currentOption === 2 && "Information Retrieval"}
          {currentOption === 3 && "Advanced Programming"}
          {currentOption === 4 && "Something else"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>All Classes</Dropdown.Item>
          <Dropdown.Item>Information Retrieval</Dropdown.Item>
          <Dropdown.Item>Advanced Programming</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <ListGroup variant="flush">
        <Accordion defaultActiveKey="-1">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              No due date
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Project</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              This week
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Next week
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Assignment 2</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Later
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <ListGroup>
                <Card.Body>Deliverable 3</Card.Body>
                <Card.Body>Deliverable 4</Card.Body>
              </ListGroup>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </ListGroup>
    </>
  );
}

export default Assigned;
