import React from "react";
import './repoelements.css';

export default function RepoElement({ data = 'default' }) {
    return (
        <button className="repo-menu-button">
            {data}
        </button>
    );
}