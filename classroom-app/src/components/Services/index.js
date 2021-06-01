import React from 'react'
import Icon1 from '../../images/svg-5.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/svg-7.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> Our Services </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Learning Material</ServicesH2>
                    <ServicesP> We help explain difficult concepts and increase your overall understanding.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Track your progress</ServicesH2>
                    <ServicesP>Make use of our latest features to help you stay updated with the latest content and track your progress.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Collaborate</ServicesH2>
                    <ServicesP>Build your network and meet like minded students who you can work with to polish your skills.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services
