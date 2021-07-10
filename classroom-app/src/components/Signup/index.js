import React, {Component} from 'react'
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
} from './SignupElements'
import Video from '../../videos/video-1.mp4';
import '../InfoSection/Button.css';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            success: false,
        }
    }

    render() {
        if (this.props.auth) {
            return (<Redirect to="/classes"/>)
        }
        return (
            <>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
                <Container>
                    <FormWrap>
                        <Icon to="/" className="button" style={{textDecoration: 'none'}}>Classroom</Icon>
                        <FormContent>
                            <Form action="/classes">
                                <FormH1> Sign Up for a new account</FormH1>
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput name="emial" type='email' required/>
                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput name = "password" type='password' required/>
                                <FormLabel htmlFor='for'>Re-Enter Password</FormLabel>
                                <FormInput type='password' required/>
                                <FormButton type='submit'>Sign Up</FormButton>
                                <Text>Get Started Today!</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);


