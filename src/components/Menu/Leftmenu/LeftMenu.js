import React from 'react';
import './leftmenu.css';

import GhostButton from '../../Button/GhostButton/GhostButton';
import Element from '../../Element/Element';
import RepoElement from '../../Repoelements/RepoElement';

import img from '../../../images/user.jpg';

export default function LeftMenu({setLeftOpen=null}) {
    return (
        <div id='leftMenu'>
            <div className='menu-items-container'>
                <div className='differentiate'>
                    <div className='top-section'>
                        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>

                        <GhostButton data={<i class="ri-close-line"></i>} onclick={()=>{setLeftOpen(false)}} />
                    </div>

                    <div className='function-area top-margin'>
                        <Element data={[<i class="ri-home-3-line"></i>, "Home"]} />
                        <Element data={[<i class="ri-record-circle-line"></i>, "Issues"]} />
                        <Element data={[<i class="ri-git-pull-request-line"></i>, "Pull request"]} />
                        <Element data={[<i class="ri-discuss-line"></i>, "Discussions"]} />
                        <Element data={[<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true">
                            <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
                        </svg>, "Codespaces"]} />
                    </div>

                    <hr />
                    
                    <div className='function-area'>
                        <Element data={[<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true">
                            <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
                        </svg>, "Explore"]} />

                        <Element data={[<i class="ri-gift-line"></i>, "Marketplace"]} />
                    </div>

                    <hr />

                    <div className='function-area'>
                        <div className='repo-search'>
                            <span>Repositories</span>
                            <GhostButton data={<i class="ri-search-line"></i>} />
                        </div>

                        <RepoElement data={[<img src={img} />, "itsharjyotsingh/Gfg"]} />
                        <RepoElement data={[<img src={img} />, "itsharjyotsingh/Leetcode"]} />
                        <RepoElement data={[<img src={img} />, "itsharjyotsingh/Rebu"]} />
                        <RepoElement data={[<img src={img} />, "itsharjyotsingh/Zomato-clone"]} />
                        <RepoElement data={[<img src={img} />, "itsharjyotsingh/Spotify"]} />

                    </div>
                </div>
            </div>
        </div>
    );
}