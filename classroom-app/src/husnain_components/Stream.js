import React from 'react';
import "./StramCard"
import StreamCard from "./StramCard";
import {Button, Card, Collapse, Jumbotron} from "react-bootstrap";
import AddInStream from "./AddInStream";
import temp from "../images/temp.png";
import {BsCameraVideo} from "react-icons/all";
import {Link} from "react-router-dom";
import Icon3 from '../../src/images/svg-5.svg';

class Stream extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    collapse = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        return <div className={"container align-content-center"}>
            <Jumbotron style={{marginTop: 20, backgroundImage: `url(${Icon3})`, backgroundSize: 'cover'}}>
                <h1>{this.props.classname}</h1>
                <p><Link to={"https://meet.google.com/lookup/gpaem3ucmu?authuser=1&hs=179"}> Meet Link <BsCameraVideo
                    fontSize={"20px"} color={"black"}/> </Link>
                </p>
                <h5>Description</h5>
                <p>
                    {this.props.description}
                </p>
            </Jumbotron>
            <div className={"row justify-content-center"}>
                <div style={{marginBottom: "10px", width: "100%"}} className={"col-md-3 center"}>
                    <Card style={{marginTop: 20}}>
                        <Card.Body>
                            <Card.Title>ToDo</Card.Title>
                            <Card.Text>
                                <li>AP Assignment</li>
                                <li>PIT Assignment</li>
                                <li>FYP Testing</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className={"col-md-9"}>
                    <Button style={{width: "100%", backgroundColor:' #5cb85c', borderColor:'transparent'}} onClick={this.collapse}>Add</Button>
                    <Collapse style={{marginTop: 10}} in={this.state.open}>
                        <div id="example-collapse-text">
                            <AddInStream/>
                        </div>
                    </Collapse>
                    <StreamCard title="Assignment 1" description="Updated Marks On Flex"/>
                    <StreamCard title="Assignment 2" description="Updated Marks On Flex"/>
                    <StreamCard title="Assignment 3" description="Updated Marks On Flex"/>
                </div>
            </div>
        </div>;
    }
}

export default Stream;