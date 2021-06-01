import React, {Component} from 'react';
import {Button, Collapse} from "react-bootstrap";
import {BsArrowDown, BsArrowUp} from "react-icons/bs";
import temp from "../images/temp.png"
class PeopleCard extends Component {
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
                <div style={{marginTop: 10, marginBottom: 10}}>
                    <div className={"row"}>
                        <div className={"col-11"}><h5>{this.props.name}</h5></div>
                        <div className={"col-1"}>
                            <Button onClick={this.collapse} variant="outline-primary">
                                {this.state.open ? <BsArrowUp/> : <BsArrowDown/>}
                            </Button>
                        </div>
                    </div>
                    <Collapse style={{marginTop: 10}} in={this.state.open}>
                        <div id="example-collapse-text">
                            <div className={"row"}>
                                <div className={"col-3"}>
                                    <img src={temp} width={"100%"}/>
                                </div>
                                <div className={"col-9"}>
                                    <p className={"font-weight-bold"}>Email : {this.props.email}</p>
                                    <p className={"font-weight-bold"}>Bio:</p>
                                    <p>{this.props.bio}</p>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default PeopleCard;