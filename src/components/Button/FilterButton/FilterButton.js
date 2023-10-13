import React from 'react';
import './FilterButton.css';

export default function FilterButton({ data = 'default', sign = '', num = 0 }) {
    return (
        <button className='github-filter-button'>
            {data} <span>{sign}</span> <div>{num}</div>
        </button>
    );
}