import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {AiOutlineFile, BsFile} from "react-icons/all";
import StreamComment from "../husnain_components/StreamComment";
import Navbar from '../components/Sidebar_Inside/Sidebar';

class Assignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString(),
            totalPoints: 100,
            gainedPoints: 100,
            name: "Assignment 1: Graded Class Activity-2(State transition Testing)",
            submitted: true,
            fileName: "A1_AP.pdf",
            description:"File1, File2, File3 attached"
        }
    }

    render() {
        return (
            <>
            <Navbar/>
            <div style={{marginTop: "50px"}} className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-9"}>
                        <h3>{this.state.name}</h3>
                        <div className={"row"}>
                            <div className={"col-lg-9"}>
                                {this.state.totalPoints} points
                            </div>

                            <div className={"col-lg-3 "}>
                                {this.state.date}
                            </div>
                        </div>
                        <div>
                            {this.state.description}
                        </div>
                        <div className={"block-example border-top border-dark"} style={{marginTop:"15px"}}></div>
                        <div style={{marginTop:50}}>
                            <StreamComment name={"Mujtaba Malik"} comment={"What will we do in Q2?"}/>
                            <div className={"block-example border-top border-dark"}></div>
                        </div>
                    </div>

                    <div className={"col-lg-3"}>
                        <Card style={{width: '100%'}}>
                            <Card.Body>
                                <Card.Title>Your Work</Card.Title>
                                <Card>
                                    <Card.Body>
                                        <AiOutlineFile fontSize="30px"/>   {this.state.fileName}
                                    </Card.Body>
                                </Card>
                                <Button style={{width: "100%", marginTop: "10px",backgroundColor:' #5cb85c', color:'white'}}
                                        variant="outline-success">{this.state.submitted ? "Submitted" : "submit"}</Button>
                            </Card.Body>
                        </Card>

                    </div>

                </div>
            </div>
            </>
        );
    }
}

export default Assignment;