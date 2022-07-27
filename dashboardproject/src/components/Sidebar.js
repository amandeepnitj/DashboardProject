import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../helper/sidebar1.css';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        to: '/home/dash',
        section: ''
    },
    {
        display: 'List of Users',
        to: '/home/listofusers',
        section: 'started'
    },
    {
        display: 'User Profile',
        to: '/home/userprofile',
        section: 'calendar'
    },
    {
        display: 'Weather app',
        to: '/home/weather',
        section: 'user'
    },
    
]

const Sidebar = () => {
    
  
    return (<div className='sidebar'>
       
        <div>
            aman
            {/* {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        {item.display}
                    </Link>
                ))
            } */}
        </div>
        <div>aman2</div>
    </div>
    )
};

export default Sidebar;