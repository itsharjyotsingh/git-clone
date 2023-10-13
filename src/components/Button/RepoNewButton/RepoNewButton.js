import React from "react";
import './repoNewButton.css';

export default function RepoNewButton({data}) {
    return (
        <button className="repo-new-button">
            {data}
        </button>
    );
}