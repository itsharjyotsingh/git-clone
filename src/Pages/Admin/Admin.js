import React from "react";
import './Admin.css';

import Userelement from "../../components/UserElement/Userelement";

export default function Admin() {
    return (
        <div className="admin-container">
            <h1>Registered Users</h1>
            <Userelement />
        </div>
    );
}