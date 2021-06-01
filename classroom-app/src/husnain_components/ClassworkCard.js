import React, {Component} from 'react';
import {Button, Collapse} from "react-bootstrap";
import {BsArrowDown, BsArrowUp} from "react-icons/bs";
import {AiOutlineProfile} from "react-icons/all";
import {Link} from "react-router-dom";

class ClassworkCard extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    collapse = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <div style={{marginTop: 10, marginBottom: 10}}>
                    <div className={"row"}>
                        <div className={"col-1"}>
                            <AiOutlineProfile fontSize={"40px"} color={"blue"} width={"100%"} height={"100%"}/>
                        </div>
                        <div className={"col-10"}>
                            <h5>{this.props.name}</h5>
                        </div>
                        <div className={"col-1"}>
                            <Button onClick={this.collapse} variant="outline-primary">
                                {this.state.open ? <BsArrowUp/> : <BsArrowDown/>}
                            </Button>
                        </div>
                    </div>
                    <Collapse style={{marginTop: 10}} in={this.state.open}>
                        <div id="example-collapse-text">
                            <p>{this.props.description}</p>
                            <ul>
                                <li>File 1</li>
                                <li>File 2</li>
                                <li>File 3</li>
                            </ul>
                            <div>
                                <Link><Button style={{width:"100%"}} >View More</Button></Link>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default ClassworkCard;