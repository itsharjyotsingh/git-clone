import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Signup from './Signup';
import Signin from './Signin';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import UserContext from '../../Context';


export default function Authenticate() {    

    return (
        <>
            <Routes>
                <Route path='/*'  element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/admin' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </>
    );
}