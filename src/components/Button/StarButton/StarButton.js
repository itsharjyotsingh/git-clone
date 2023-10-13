import React from 'react';
import './StarButton.css';

export default function FilterButton({ data = 'default', sign = '', num = '' }) {
    return (
        <button className='star-github-filter-button'>
            {data} <span>{sign}</span> {num}
        </button>
    );
}