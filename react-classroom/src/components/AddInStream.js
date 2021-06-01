import React, {Component} from 'react';
import {Button, ButtonGroup, Card, Collapse} from "react-bootstrap";

class AddInStream extends Component {
    render() {
        return (
            <div>
                <Card style={{marginTop: 20}}>
                    <Card.Body>
                        <Card.Text>
                            <div>
                                <input placeholder={"Category"}
                                       style={{width: "100%", border: "", marginTop: "10px", marginBottom: "10px"}}/>
                            </div>
                            <div>
                                <input placeholder={"Title"}
                                       style={{width: "100%", border: "", marginTop: "10px", marginBottom: "10px"}}/>
                            </div>
                            <div>
                                <textarea placeholder={"Description"}
                                          style={{width: "100%", border: "", marginTop: "100"}}/>
                            </div>
                            <div style={{marginTop: "10px"}}>
                                <input type={"file"} multiple/>
                            </div>
                            <div style={{marginTop: "10px"}}>
                                <ButtonGroup>
                                    <Button>Post</Button>
                                    <Button>Assignment</Button>
                                    <Button>Resource</Button>
                                </ButtonGroup>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default AddInStream;