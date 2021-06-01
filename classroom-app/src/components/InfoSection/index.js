import React from 'react';
import { Link } from 'react-router-dom'
import Button1 from '@material-ui/core/Button';

import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img
         } from './InfoElements'
const InfoSection = ({lightBg, id,imgStart, topLine, lightText,
headline, darkText, description , buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
         <InfoContainer lightBg={lightBg} id= {id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                         <TextWrapper>
                             <TopLine> {topLine} </TopLine>
                             <Heading lightText={lightText}> {headline}</Heading>
                             <Subtitle darkText = {darkText}>{description} </Subtitle>
                             <Button1 style={{
                                borderRadius: 40,
                                backgroundColor: "#01bf71",
                                padding: "10px 20px 10px",
                                margin: "5px 5px 5px 5px",
                                fontSize: "15px"
                                 }}component={Link} to="/signup">Sign Up</Button1>
                             {/*<BtnWrap>
                                 <Button to="home"
                                 smooth = {true}
                                 duration = {500}
                                 spy = {true}
                                 exact = "true"
                                 offset ={-80}
                                 primary = { primary ? 1 : 0}
                                 dark = {dark ? 1: 0}
                                 dark2= {dark2 ? 1 : 0}

                                 >{buttonLabel}</Button>
                             </BtnWrap>*/}
                         </TextWrapper>
                     </Column1>
                     <Column2>
                         <ImgWrap>
                             <Img src={img} alt={alt}/>
                         </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>
        </>
    )
}

export default InfoSection
