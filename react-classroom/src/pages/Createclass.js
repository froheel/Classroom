import { Form, Card, Row, Col, Button} from 'react-bootstrap'
import {useState} from 'react';

function Createclass() {

    const [className, setClassName] = useState("");
    const [testPass, setPass] = useState(false);
    const submitData = () => {
        console.log(className);
    }
    const createCode = () =>{
        //server side code generation
        return "random class code";
    }
    return (
      <div className="mx-3 my-5 main">
        <Row className="h-100">
          <Col></Col>
          <Col className="my-auto">
            <Card>
              <Card.Body>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    submitData();
                }}>
                  <Form.Group controlId="classname">
                    <Form.Label>Create a Class</Form.Label>
                    <br></br>
                    <Form.Control type="text" placeholder="Class Name"/>
                    <br></br>
                    <Button>Create Class</Button>
                  </Form.Group>
                </Form>
                {testPass ? 
                <p className='text-success'>Class Created<br></br> Class Code: {createCode()}</p>
                :
                <p className='text-fail'><br></br>Failed to Create Class</p>
                }
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
}

export default Createclass
