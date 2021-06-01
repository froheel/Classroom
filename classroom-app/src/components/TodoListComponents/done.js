import { Dropdown, ListGroup } from "react-bootstrap";
import { useState } from "react";
function Done() {
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
      <ListGroup as="ul" variant="flush">
        <ListGroup.Item as="li">Assignment 2</ListGroup.Item>
        <ListGroup.Item as="li">Homework 2</ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default Done;
