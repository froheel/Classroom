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

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
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
        console.log(this.state)
        axios.post('http://localhost:8080/authenticate', {
            username: this.state.username,
            password: this.state.password
        },).then(function (response) {
            console.log(response);
            if (response.data.error) {
                // Todo: Display to ui
                console.log(response.data.error);
            } else if (response.data.jwt) {
                // Todo: Save this token to state for further process
                console.log("The JWT is" + response.data.jwt);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }


    render() {
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

export default SignIn;
