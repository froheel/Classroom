import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text,VideoBg } from './SignupElements'
import Video from '../../videos/video-1.mp4';
import '../InfoSection/Button.css';

const SignUp = () => {
    return (
        <>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
            </VideoBg>
            <Container>
                <FormWrap>
                    <Icon to="/" className="button" style={{ textDecoration: 'none'}}>Classroom</Icon>
                    <FormContent>
                        <Form action="/classes">
                            <FormH1> Sign Up for a new account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type ='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormLabel htmlFor='for'>Re-Enter Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type ='submit'>Sign Up</FormButton>
                            <Text>Get Started Today!</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default SignUp;
