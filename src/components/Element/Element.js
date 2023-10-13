import React from "react";
import './element.css';

export default function Element({ data='default' }) {
    return (
        <button className="menu-button">
            {data}
        </button>
    );
}