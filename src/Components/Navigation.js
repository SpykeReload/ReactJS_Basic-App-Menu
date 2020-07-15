import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Transition} from 'react-spring/renderprops'
import NavigationMenu from './NavigationMenu';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav>
            <span class="text-xl cursor-pointer">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu) }
                />
            </span>  
            <Transition
                items={showMenu}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}>
                {
                    show => show && (props => <div 
                        style={ props } 
                        class="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false) }>
                    </div>)
                }
            </Transition>

            <Transition
                items={showMenu}
                from={{ opacity: 0, transform: 'translateX(-100%)' }}
                enter={{ opacity: 1, transform: 'translateX(0%)' }}
                leave={{ opacity: 0, transform: 'translateX(-100%)' }}>
                {
                    show => show && (props => <div 
                        style={ props } 
                        class="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">
                            <NavigationMenu 
                                closeMenu={ () => setShowMenu(false) }
                            />
                    </div>)
                }
            </Transition>

        </nav>
    );
}

export default Navigation;