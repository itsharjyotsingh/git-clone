import React from "react";
import './Userelement.css';

export default function Userelement({sign, name, img}) {
    return (
        <div className="user-component red">
            <div className="user-component-wrapper">
                <img src={img} />
                <h1>{name}</h1>
            </div>
            <button className="user-component-cross">
                {sign}
            </button>
        </div>
    );
}