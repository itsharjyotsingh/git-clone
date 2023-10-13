import React, { useContext, useEffect } from "react";
import './Admin.css';
import UserContext from "../../Context";

import Userelement from "../../components/UserElement/Userelement";

import img from '../../images/user.jpg';
import anmol from '../../images/bhaiya.jpg';

export default function Admin() {

    const { isadmin } = useContext(UserContext);

    return (
        <div className="admin-container">
            {isadmin ? <><h1>Registered Users</h1>
            <Userelement img={img} sign={<i class="ri-delete-bin-line"></i>} name={"Harjyot Singh"}/>
                <Userelement img={anmol} sign={<i class="ri-delete-bin-line"></i>} name={"Anmol Singhal"} /></> : <h1>You are not Admin</h1>}
            
        </div>
    );
}