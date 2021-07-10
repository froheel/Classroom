import React, {Component} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import Stream from "./Stream";
import People from "./People";
import Classwork from "./Classwork";
import Navbar from "../../src/components/Sidebar_Inside/Sidebar";
import axios from "axios";
import {connect} from "react-redux";

class InClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            students: null,
            teachers: null,
            details: null,
            posts: null
        }

    }

    componentDidMount() {
        const classID = this.props.match.params.id
        axios.post(`http://localhost:8080/class/${classID}/students`, {}, {
            headers: {'Authorization': "Bearer " + this.props.auth.jwt}
        },).then((response) => {
            console.log(response.data)
            this.setState({students: response.data})
        }).catch((err) => {
            console.log(err)
        })
        axios.post(`http://localhost:8080/class/${classID}/teachers`, {}, {
            headers: {'Authorization': "Bearer " + this.props.auth.jwt}
        },).then((response) => {
            console.log(response.data)
            this.setState({teachers: response.data})
        }).catch((err) => {
            console.log(err)
        })
        axios.post(`http://localhost:8080/class/${classID}`, {}, {
            headers: {'Authorization': "Bearer " + this.props.auth.jwt}
        },).then((response) => {
            console.log(response.data)
            this.setState({details: response.data})
            console.log(this.state)
        }).catch((err) => {
            console.log(err)
        })
        axios.post(`http://localhost:8080/class/${classID}/posts`, {}, {
            headers: {'Authorization': "Bearer " + this.props.auth.jwt}
        },).then((response) => {
            console.log(response.data)
            this.setState({posts: response.data})
            console.log(this.state)
        }).catch((err) => {
            console.log(err)
        })
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
        if (!(this.state.students && this.state.teachers && this.state.details && this.state.posts))
            return ("")

        return (

            <div>
                <Navbar/>
                <div style={{marginTop: 10}}>
                    <div className={"container"}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary" onClick={this.one}>Stream</Button>
                                <Button variant="secondary" onClick={this.two}>Classwork</Button>
                                <Button variant="secondary" onClick={this.three}>People</Button>
                            </ButtonGroup>
                        </div>
                        {this.state.page === 1 ? <Stream classid ={this.props.match.params.id} posts={this.state.posts} classname={this.state.details.name}
                                                         description={this.state.details.description}
                                                         meet={this.state.details.meet}/> : ""}
                        {this.state.page === 2 ? <Classwork/> : ""}
                        {this.state.page === 3 ?
                            <People teachers={this.state.teachers} students={this.state.students}/> : ""}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(InClass);