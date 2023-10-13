import React from 'react';
import './Button.css';

export default function Button({ data = 'default', onclick = null }) {
    
    if (!onclick) {
        return (
            <button className='github-button'>
                {data}
            </button>
        ); 
    } else {
        return (
            <button className='github-button' onClick={onclick}>
                {data}
            </button>
        );
    }
}