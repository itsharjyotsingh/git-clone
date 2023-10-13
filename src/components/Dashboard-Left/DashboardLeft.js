import React from 'react';
import './dashboardLeft.css';

import RepoSearch from '../Search/repository-search/RepoSearch';
import RepoNewButton from '../Button/RepoNewButton/RepoNewButton';

export default function DashboardLeft() {
    return (
        <div id='dashboard-left-section' className='component'>
            <div className='repo-container'>
                <div className='first-section'>
                    {/* top section */}
                    <span>Top Repositories</span>
                    <RepoNewButton data={[<i class="ri-book-mark-line"></i>, "New"]}/>
                </div>
                    {/* search box */}
                    <RepoSearch data='Find a repository...'></RepoSearch>
                <div>
                    {/* repositories area */}
                </div>
                <div>
                    {/* recent ativity */}
                    <span>Recent activity</span>
                    <div className='recent-activity-box'>
                        <span>When you take actions across GitHub, we`ll<br/>provide links to that activity here.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}