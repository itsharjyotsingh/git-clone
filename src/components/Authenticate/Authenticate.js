import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Signup from './Signup';
import Signin from './Signin';
import Dashboard from '../../Pages/Dashboard/Dashboard';


export default function Authenticate() {
    return (
        <>
            <Routes>
                {/* <Route path='/*'  element={<Dashboard />} /> */}
                <Route path='/signup' element={<Signup />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/admin' element={<Dashboard admin={true} />} />
                <Route path='/dashboard' element={<Dashboard admin={false} />} />
            </Routes>
        </>
    );
}