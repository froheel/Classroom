import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";


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
    },
    {
        title: 'Todo List',
        path: '/Todolist',
        icon: <FaIcons.FaClipboardList/>,
        cName: 'nav-text'
    },
    {
        title: 'Create a class',
        path: '/Createclass',
        icon: <GiIcons.GiBookshelf/>,
        cName: 'nav-text'
    }
]