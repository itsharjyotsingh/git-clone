import React from "react";
import './properghostbutton.css';

export default function GhostButton({ data = 'default' }) {
        return (
            <button className="proper-ghost-button">
                {data}
            </button>
        );
}