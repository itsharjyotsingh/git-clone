import React from "react";
import './ghostbutton.css';

export default function GhostButton({data='default', onclick=null}) {
    if (!onclick) {
        return (
            <button className="ghost-button">
                {data}
            </button>
        );
    } else {
        return (
            <button className="ghost-button" onClick={onclick}>
                {data}
            </button>
        );
    }
}