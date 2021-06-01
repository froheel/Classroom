import React from 'react'
import Icon1 from '../../images/svg-8.svg'
import Icon2 from '../../images/svg-9.svg'
import Icon3 from '../../images/svg-10.svg'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ClassesElements'
import { Link } from 'react-router-dom'


const Services = () => {
    return (
        <ServicesContainer>
            <ServicesWrapper>
                <ServicesCard>
                    <Link to ='/'>
                        <ServicesIcon src={Icon3} />
                    </Link>
                    <ServicesH2>Information Retrieval</ServicesH2>
                    <ServicesP>Noshaba Nasir</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <Link to ='/'>
                        <ServicesIcon src={Icon1} />
                    </Link>
                    <ServicesH2>Data Science</ServicesH2>
                    <ServicesP>Maryam Bashir</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <Link to ='/'>
                        <ServicesIcon src={Icon2} />
                    </Link>
                    <ServicesH2>Machine Learning</ServicesH2>
                    <ServicesP>Irfan Younas</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
             <ServicesWrapper>
                <ServicesCard>
                    <Link to ='/'>
                        <ServicesIcon src={Icon1} />
                    </Link>
                    <ServicesH2>Artificial Intelligence</ServicesH2>
                    <ServicesP>Aamir Wali</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <Link to ='/'>
                        <ServicesIcon src={Icon2} />
                    </Link>
                    <ServicesH2>Complier</ServicesH2>
                    <ServicesP>Hira Asif</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <Link to ='/'>
                        <ServicesIcon src={Icon3} />
                    </Link>
                    <ServicesH2>Cloud</ServicesH2>
                    <ServicesP>Mujtaba Malik</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services
