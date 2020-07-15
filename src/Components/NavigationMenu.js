import React from 'react';
import { Link } from "react-router-dom";

function NavigationMenu(props) {
    return(
        <div>
            <div class="font-bold py-3">
                App Name
            </div>
            <ul>
                <li>
                    <Link to="/" class="text-blue-500 py-3 border-t border-b block" onClick={ props.closeMenu }>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" class="text-blue-500 py-3 border-b block" onClick={ props.closeMenu }>
                        About
                    </Link>
                </li>
            </ul> 
        </div>
        
    );
}

export default NavigationMenu;