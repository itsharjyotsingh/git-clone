import React from 'react';
import './dashboardRight.css';
import { Link } from 'react-router-dom'; 

import img from '.././../images/user.jpg';

import Button from '../Button/NormalButton/Button';
import DashboardContainer from '../dashboard-container/DashboardContainer';
import FilterButton from '../Button/FilterButton/FilterButton';
import ProperGhostButton from '../../components/Button/ProperGhostButton/ProperGhostButton';
import StarButton from '../../components/Button/StarButton/StarButton';

export default function DashboardRight() {

    return (
        <div className='dashboard-right-section'>
            <div className='middle-element'>
                {/* main section */}
                <div className='middle-element-top'>
                    <h2>Home</h2>
                    <div className='middle-element-top-right'>
                        <Link to={'/signup'}>Send feedback</Link>
                        <FilterButton data={<i class="ri-filter-3-fill"></i>} sign='Filter' num={<i class="ri-number-8"></i>} />
                    </div>
                </div>

                <div className='container-wrapper-main'>
                    <div className='container'>
                        <div className='home-ele-top-section'>
                            <div className='leftpart'>
                                {/* left */}
                                <img src={img} alt='img'></img>
                                <div className='leftpart-diff'>
                                    <div>
                                        <Link>harjyotsingh</Link> <span>created a repository</span>
                                    </div>

                                    <span>13 hours ago</span>
                                </div>
                            </div>

                            <div className='rightpart'>
                                {/* right */}
                                <ProperGhostButton data={<i class="ri-more-fill"></i>} />
                            </div>
                        </div>

                        <div className='project-section-wrapper top-margin'>
                            <div className='main-project-section'>
                                <div className='leftpart'>
                                    <img src={img} ></img>
                                    <span>harjyotsingh/scripthon</span>
                                </div>

                                <div className='rightpart'>
                                    <StarButton data={<i class="ri-star-line"></i>}
                                        sign='Star' num={<i class="ri-arrow-down-s-fill"></i>}></StarButton>
                                </div>
                            </div>
                            <div className='language-section'>
                                <div className='color'></div>
                                <span>Python</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='last-section'>
                {/* right section */}
                <div className='container-wrapper'>
                    <div className='container'>
                        <span>Latest changes</span>
                        <div className='changes-main-container'>

                            {/* First content */}
                            <div className='dot-span-container'>
                                <div className='circle'></div>
                                <span>14 hours ago</span>
                            </div>
                            <div className='changes-details-container'>
                                <p>Repository Rules - Public Beta - History, Import, Export</p>
                            </div>

                            {/* Second content */}
                            <div className='dot-span-container'>
                                <div className='circle'></div>
                                <span>Yesterday</span>
                            </div>
                            <div className='changes-details-container'>
                                <p>GitHub Repository Custom Properties Beta</p>
                            </div>

                            {/* Third content */}
                            <div className='dot-span-container'>
                                <div className='circle'></div>
                                <span>2 days ago</span>
                            </div>
                            <div className='changes-details-container'>
                                <p>Requiring workflows with Repository Rules is generally available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}