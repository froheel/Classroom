import { Dropdown } from "react-bootstrap";
import { useState } from "react";
function Assigned() {
  const [currentOption, setCurrentOption] = useState(1);
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {currentOption === 1 && "All Classes"}
          {currentOption === 2 && "Information Retrieval"}
          {currentOption === 3 && "Advanced Programming"}
          {currentOption === 4 && "Something else"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">All Classes</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Information Retrieval</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Advanced Programming</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Assigned;
