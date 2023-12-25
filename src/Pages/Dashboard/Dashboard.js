import React, { useContext, useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import './dashboard.css';
import gsap from 'gsap';

// Components
import NavSearch from '../../components/Search/Nav-SearchToggler/NavSearchToggler';
import Button from '../../components/Button/NormalButton/Button';
import DashboardLeft from '../../components/Dashboard-Left/DashboardLeft';
import DashboardRight from '../../components/Dashboard-right/DashboardRight';

import LeftMenu from '../../components/Menu/Leftmenu/LeftMenu';
import RightMenu from '../../components/Menu/Rightmenu/RightMenu';

// image
import img from '../../images/user.jpg';
import { Link, Route, Routes } from 'react-router-dom';
import Admin from '../Admin/Admin';
import UserContext from '../../Context';

export default function Dashboard() {
    const [userData, setUserData] = useState([{
        "username": "itsharjyotsingh",
        "email": "harjyotk2@gmail.com",
        "name": "Harjyot Singh",
        "repositories": [
            "Gfg-solutions",
            "Leetcode-solutions",
            "Rebu"
        ],
        "image": "https://res.cloudinary.com/dwulkuo7v/image/upload/v1697278899/meeee_ipt16m.jpg",
        "isadmin": true
    }]);

    const [isadmin, setAdmin] = useState(false);

    const switchuser = () => {
        setAdmin(!isadmin);
    }

    useEffect(async () => {
        const data = await fetch(`http://localhost:5000/user?isadmin=true`);

        const user = await data.json();

        setUserData(user);
    }, [isadmin]);

    const [leftOpen, setLeftOpen] = useState(false);
    const [rightOpen, setRightOpen] = useState(false);


    return (
        <UserContext.Provider value={userData}>
        {leftOpen && <LeftMenu setLeftOpen={setLeftOpen} />}
        {rightOpen && <RightMenu setRightOpen={setRightOpen} /> }

        <button id='switch' onClick={() => { switchuser() }}>Switch User</button>
            
        <div id='main'>
            {/* main body */}
            

            <div id='Navbar' className='component'>
                <div className='leftSection'>
                    {/* left side */}
                    <Button data={<i class="ri-menu-line"></i>} onclick={()=>{setLeftOpen(true)}}/>
                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" >
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                        <span>Dashboard</span>
                        { userData[0].isadmin && <Link to='/admin'>
                            <Button data={[<i class="ri-user-settings-line"></i>,'Admin']} />
                        </Link>}
                </div>

                <div className='rightSection'>
                    {/* right side */}
                    <NavSearch />
                    <div className='gap'>
                        <Button data={[<i class="ri-add-line"></i>, <i class="ri-arrow-down-s-fill"></i>]} />
                        <Button data={<i class="ri-record-circle-line"></i>} />
                        <Button data={<i class="ri-git-pull-request-line"></i>} />
                        <Button data={<i class="ri-inbox-2-line"></i>} />
                        <img src={userData[0].image} alt='profile-img' onClick={()=>{setRightOpen(true)}}></img>
                    </div>
                </div>
            </div>

            <div id='undernav-section'>
                    {/* under Navbar */}
                    
                    {!userData.isadmin && <><DashboardLeft /><DashboardRight /></> }
                    
                    { userData.isadmin && <Admin/>}
            </div>
        </div>
        </UserContext.Provider >
    );
}