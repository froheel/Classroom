import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight

} from './HeroElements.js'
const HeroSection = () => {

    const[hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
               
                <HeroContent>
                    <HeroH1>Virtual Classroom to cater for your needs </HeroH1>
                    <HeroP> Sign Up today to get Started !</HeroP>
                    <HeroBtnWrapper>
                        <Button to ='signup' 
                        onMouseEnter= {onHover}
                        onMouseLeave = {onHover}
                        primary = 'false'
                        dark = 'true'
                        style={{ textDecoration: 'none'}}
                         >
                            Get Started  {hover ? <ArrowForward /> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>

                 <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
                </VideoBg>
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
