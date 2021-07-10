import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon,
    Text,
    VideoBg
} from './SigninElements'
import axios from "axios"
import Video from '../../videos/video-1.mp4';
import '../InfoSection/Button.css';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            success: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }


    handleSubmit(event) {
        event.preventDefault();
        this.signIn()
        this.props.pill()
    }

    async signIn() {
        const res = await axios.post('http://localhost:8080/authenticate', {
            username: this.state.username,
            password: this.state.password
        },);
        if (!res.data.error) {
            await this.props.signIn(res.data.jwt, res.data.email, res.data.img);
        }
    }

    render() {

        if (this.props.auth) {
            return (<Redirect to="/classes"/>)
        }
        return (
            <>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
                </VideoBg>
                <Container>
                    <FormWrap>
                        <Icon to="/" className="button" style={{textDecoration: 'none'}}>Classroom</Icon>
                        <FormContent>
                            <Form onSubmit={this.handleSubmit}>
                                <FormH1> Sign in to your account</FormH1>
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput name='username' type='email' required onChange={this.handleChange}/>
                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput name="password" type='password' required onChange={this.handleChange}/>
                                <FormButton type='submit'>Login</FormButton>
                                <Text> Resume Learning great Content!</Text>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (jwt, name, email, img) => (dispatch({type: "SIGN_IN", payload: {name, jwt, email, img}})),
        pill: () => (dispatch({type: "PILL"}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
