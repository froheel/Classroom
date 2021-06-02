import { Form, Card, Row, Col, Button} from 'react-bootstrap'
import {useState} from 'react';
import Navbar from '../components/Sidebar_Inside/Sidebar';

function Createclass() {

    const [className, setClassName] = useState("");
    const [testPass, setPass] = useState(false);
    const submitData = (e) => {
        setClassName(e.target.value);
    }
    const createCode = () =>{
        //server side code generation
        return "Xy25372572";
    }

    const submitClassName = () =>{
      setPass(true);
      console.log(className);
      //backend data send
    }

    return (
      <>
      <Navbar/>
      <div className="mx-3 my-5 main">
        <Row className="h-100">
          <Col></Col>
          <Col className="my-auto">
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="classname">
                    <Form.Label>Create a Class</Form.Label>
                    <br></br>
                    <Form.Control value={className} type="text" placeholder="Class Name" onChange={ e => submitData(e)}/>
                    <br></br>
                    <Button className={"btn-success"} style={{width:"100%"}} onClick={submitClassName}>Create Class</Button>
                  </Form.Group>
                </Form>
                {testPass &&
                <p className='text-success'>Class Created<br></br> Class Code: {createCode()}</p>}
                
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </div>
      </>
    );
}

export default Createclass
