import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function Layout(props) {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Layout;