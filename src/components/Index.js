import React, { createContext, useContext } from 'react';
import { Routes, Route, Navigate, Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';

// Components
import Authenticate from './Authenticate/Authenticate';


export default function Index() {
    const UserContext = createContext();

    const [user, setUser] = useState(null);
    
    useEffect(() => {
        if (localStorage && localStorage.getItem('user-data') != null) {
            setUser(localStorage.getItem('user-data'));
        } else {
            Navigate('/signin')
        }
    }, [user]);


    return (
        <UserContext.Provider value={user}>
            <Authenticate />
        </UserContext.Provider>
    );
}