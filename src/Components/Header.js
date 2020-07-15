import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header class="border-b font-bold p-3 flex justify-between items-center">
            <Link to="/" class="font-bold">
                AppName
            </Link>

            <Navigation />
        </header>
    );
}

export default Header;