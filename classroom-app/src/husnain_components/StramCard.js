import React, {useState} from 'react';
import {Button, ButtonGroup, Card, Collapse} from "react-bootstrap";
import StreamComment from "./StreamComment";
import {BsArrowRight} from "react-icons/bs";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";

class StreamCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            comments: null
        };
    }

    collapse = () => {
        this.setState({open: !this.state.open})
    }

    componentDidMount() {
        const postid = this.props.post.postid;
        axios.post(`http://localhost:8080/postcomments/${postid}`, {}, {
            headers: {'Authorization': "Bearer " + this.props.auth.jwt}
        },).then((response) => {
            const comments = response.data.comments.map(comment => (
                <>
                    <StreamComment name={comment.name} comment={comment.content}/>
                    <div className={"block-example border-top border-dark"}></div>
                </>
            ))
            this.setState({comments: comments});
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <Card style={{marginTop: 20, width: "100%"}}>
                    <Card.Body>
                        <Card.Title>{this.props.post.topic}</Card.Title>
                        <Card.Text>
                            {this.props.post.content}
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
                        <ButtonGroup style={{width: "100%"}}>
                            <Button onClick={this.collapse}
                                    aria-controls="example-fade-text"
                                    aria-expanded={this.state.open}
                                    variant="primary">comments</Button>
                            {this.props.post.type === "R" ?
                                <Link to="/assignment" className={"btn btn-primary"}>Open</Link> : ""}
                        </ButtonGroup>
                        <Collapse in={this.state.open}>
                            <div id="example-collapse-text">
                                {this.state.comments}
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(StreamCard);