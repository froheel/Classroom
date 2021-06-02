import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const VideoBg = styled.video`
position: absolute;
top:0;
right:0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
width: 100%;
height: 100%;
--o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const Container = styled.div`
min-height: 692px;
width: 100%;
position: fixed;
bottom: 0;
left:0;
top: 0;
z-index: 0;
overflow: hidden;


`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px){
    height: 80%;
}
`

export const Icon = styled(Link)`
padding-left: 32px;
padding-top: 40px;
padding-bottom:20px ;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;
background: #010601;
width: 100%;

@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}

`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin-top:-5%;
@media screen and (max-width: 400px){
    padding: 10px;
}
`;

export const Form = styled.form`
background: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width: 400 px){
padding: 32px 32px;
}
`
export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`;

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`;

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`;

export const FormButton = styled.button`
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #010601;
font-size: 20px;
cursor: pointer;

&:hover{
    background: white;
}
`;

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color:#fff;
font-size: 14px;
`;




