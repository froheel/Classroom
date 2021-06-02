import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text,VideoBg } from './SigninElements'
import Video from '../../videos/video-1.mp4';
import '../InfoSection/Button.css';

const SignIn = () => {
    return (
        <>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
            </VideoBg>
            <Container>
                <FormWrap>
                    <Icon to="/" className="button" style={{ textDecoration: 'none'}}>Classroom</Icon>
                    <FormContent>
                        <Form action="/classes">
                            <FormH1> Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type ='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type ='submit'>Login</FormButton>
                            <Text> Resume Learning great Content!</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default SignIn;
