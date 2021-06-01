import React, {useState} from 'react';
import {Button, ButtonGroup, Card, Collapse} from "react-bootstrap";
import StreamComment from "./StreamComment";
import {BsArrowRight} from "react-icons/bs";
import {Link} from "react-router-dom";

class StreamCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    collapse = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <Card style={{marginTop: 20, width: "100%"}}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <div className={"row"} style={{marginBottom: "6px"}}>
                            <div className={"col-10"} style={{width: "100%"}}>
                                <input placeholder={"Comment"}
                                       style={{width: "100%", border: ""}}/>
                            </div>
                            <div className={"col-2"}>
                                <Button style={{height: "100%", width: "100%",}}
                                        className={"center-align"}><BsArrowRight/></Button>
                            </div>

                        </div>
                        <ButtonGroup style={{width:"100%"}}>
                            <Button  onClick={this.collapse}
                                    aria-controls="example-fade-text"
                                    aria-expanded={this.state.open}
                                    variant="primary">comments {this.state.comments}</Button>
                            <Link  to="/assignment"  className={"btn btn-primary"}>Open</Link>
                        </ButtonGroup>
                        <Collapse in={this.state.open}>
                            <div id="example-collapse-text">
                                <StreamComment name={"Farhan"} comment={"Its still not uploaded"}/>
                                <div className={"block-example border-top border-dark"}></div>
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default StreamCard;