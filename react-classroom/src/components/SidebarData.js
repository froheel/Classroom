import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Classes',
        path: '/Classes',
        icon: <SiIcons.SiGoogleclassroom/>,
        cName: 'nav-text'
    },
    {
        title: 'Assignments',
        path: '/Assignments',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    }
]