import React, {Component} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import Stream from "./Stream";
import People from "./People";
import Classwork from "./Classwork";
import Navbar from "../../src/components/Sidebar_Inside/Sidebar";

class InClass extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 1}
    }

    one = () => {
        this.setState({page: 1})
    }
    two = () => {
        this.setState({page: 2})
    }
    three = () => {
        this.setState({page: 3})
    }

    render() {
        return (
            <>
            <Navbar/>
            <div style={{marginTop: 10}}>
                <div className={"container"}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <ButtonGroup  aria-label="Basic example">
                            <Button variant="secondary" onClick={this.one}>Stream</Button>
                            <Button variant="secondary" onClick={this.two}>Classwork</Button>
                            <Button variant="secondary" onClick={this.three}>People</Button>
                        </ButtonGroup>
                    </div>
                    {this.state.page===1?<Stream classname="AP_7B" description="This is Ap class"/>:""}
                    {this.state.page===2?<Classwork/>:""}
                    {this.state.page===3?<People/>:""}

                </div>
            </div>
            </>
        );
    }
}

export default InClass;