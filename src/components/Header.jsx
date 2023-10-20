import React from 'react';
import Banner from './Banner';
import Navbar from '../components/Navbar';


function Header(props) {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
}

export default Header;