import React from 'react';
import './repoSearch.css';

export default function RepoSearch({data='default'}) {
    return (
        <input className='repo-search-box' placeholder={data} type='text' />
    );
}