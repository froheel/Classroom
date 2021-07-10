import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class Logout extends Component {

    render() {
        console.log(this.props)
        this.props.signOut()
        return (
            <Redirect to="/"/>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        signOut: ()=>(dispatch({type:"SIGN_OUT"}))
    }
}

export default connect(null, mapDispatchToProps)(Logout);
