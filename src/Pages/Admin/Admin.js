import React, { useContext, useEffect, useState } from "react";
import './Admin.css';
import UserContext from "../../Context";

import Userelement from "../../components/UserElement/Userelement";

export default function Admin() {

    const { isadmin, userData } = useContext(UserContext);

    const [allUsers, setAllusers] = useState();
    useEffect(async () => {
        const users = await fetch('http://localhost:5000/user?isadmin=false');
        const usersList = await users.json();

        setAllusers(usersList);
    }, []);

    return (
        <div className="admin-container">
            {userData ? <><h1>Registered Users</h1>
            
                {allUsers.map((user) => {
                    return <Userelement img={user.image} sign={<i class="ri-delete-bin-line"></i>} name={user.name}/>
                })}
            </> : <h1>You are not Admin</h1>}
            
        </div>
    );
}