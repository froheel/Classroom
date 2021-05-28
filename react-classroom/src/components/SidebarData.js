import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import * as CgIcons from "react-icons/cg";


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
    },
    {
        title: 'Join a Class',
        path: '/Joinclass',
        icon: <CgIcons.CgEnter/>,
        cName: 'nav-text'
    }
]