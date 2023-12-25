import React, { createContext, useContext } from 'react';
import { Routes, Route, Navigate, Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';
import UserContext from '../Context';

// Components
import Authenticate from './Authenticate/Authenticate';


export default function Index() {

    return (
        <Authenticate/>
    );
}