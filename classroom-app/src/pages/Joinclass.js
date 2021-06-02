import { Form, Card, Row, Col} from 'react-bootstrap'
import {useState} from 'react';
import Navbar from '../components/Sidebar_Inside/Sidebar';

function Joinclass() {

    const [classCode, setClassCode] = useState("");
    const [testPass, setPass] = useState(false);
    const submitData = () => {
        console.log(classCode);
        if (classCode.length >= 5 && classCode.length <= 7){
            setPass(true);
        }
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
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    submitData();
                }}>
                  <Form.Group controlId="classcode">
                    <Form.Label>Join a Class</Form.Label>
                    <br></br>
                    <Form.Text>
                      Ask your teacher for the class code and enter it here to join the class
                    </Form.Text>
                    <Form.Control type="text" placeholder="Class Code" value={classCode} onChange={(e) => {setClassCode(e.target.value)}}/>
                    <br></br>
                    <Form.Text className="text-bold">
                     Class code must be alphanumeric test between 5 to 7 letters
                    </Form.Text>
                  </Form.Group>
                </Form>
                {testPass ? 
                <p className='text-success'>
                   
                    test pass
                </p>
                : null
                }
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </div>
      </>
    );
}

export default Joinclass
