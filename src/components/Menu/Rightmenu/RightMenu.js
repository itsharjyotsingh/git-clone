import React, { useContext } from 'react';
import GhostButton from '../../Button/GhostButton/GhostButton';
import Element from '../../Element/Element';
import RepoElement from '../../Repoelements/RepoElement';
import './rightmenu.css';

import img from '../../../images/user.jpg';
import UserContext from '../../../Context';

export default function RigthMenu({ setRightOpen }) {
    
    const userData  = useContext(UserContext);

    return (
        <div id='rightMenu'>
            <div className='menu-items-container'>
                <div className='differentiate'>
                    <div className='top-section'>
                        <div>
                            <img src={userData[0].image} alt='profile-img'></img>
                            <div className='centralize'>
                                <span>{userData[0].username}</span>
                                <span>{userData[0].email}</span>
                            </div>
                        </div>

                        <GhostButton data={<i class="ri-close-line"></i>} onclick={() => { setRightOpen(false) }} />
                    </div>

                    <div className='function-area top-margin'>
                        <Element data={[<i class="ri-beer-line"></i>, "Drinking Python and coding in Beer"]} />
                    </div>
                    <hr/>
                    <div className='function-area'>
                        <Element data={[<i class="ri-record-circle-line"></i>, "Profile"]} />
                    </div>
                    <hr />
                    <div className='function-area'>
                        <Element data={[<i class="ri-git-pull-request-line"></i>, "Your repositories"]} />
                        <Element data={[<i class="ri-discuss-line"></i>, "Your projects"]} />
                        <Element data={[<i class="ri-git-pull-request-line"></i>, "Your organization"]} />
                        <Element data={[<i class="ri-discuss-line"></i>, "Your enterprises"]} />
                        <Element data={[<i class="ri-git-pull-request-line"></i>, "Your stars"]} />
                        <Element data={[<i class="ri-discuss-line"></i>, "Your sponsers"]} />
                        <Element data={[<i class="ri-discuss-line"></i>, "Your gists"]} />
                        
                    </div>

                    <hr />

                    <div className='function-area'>
                        <Element data={[<i class="ri-gift-line"></i>, "Try enterprise"]} />
                        <Element data={[<i class="ri-gift-line"></i>, "Copilot"]} />
                        <Element data={[<i class="ri-gift-line"></i>, "Feature preview"]} />
                        <Element data={[<i class="ri-gift-line"></i>, "Settings"]} />
                    </div>
                    <hr />

                    <div className='function-area'>
                        <Element data={[<i class="ri-gift-line"></i>, "Github Docs"]} />
                        <Element data={[<i class="ri-gift-line"></i>, "Github Support"]} />
                    </div>

                    <hr />

                    <div className='function-area'>
                        <Element data={"Sign out"} />
                    </div>
                </div>
            </div>
        </div>
    );
}