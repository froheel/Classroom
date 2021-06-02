import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen = {isOpen} toggle={toggle}></Sidebar>
        <Navbar toggle={toggle}></Navbar>
        <HeroSection></HeroSection>
        <InfoSection{...homeObjOne}></InfoSection>
        <InfoSection{...homeObjTwo}></InfoSection>
        <Services/>
        <InfoSection{...homeObjThree}></InfoSection>
        </>
    )
}

export default Home

