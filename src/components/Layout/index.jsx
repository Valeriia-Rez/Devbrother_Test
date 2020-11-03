import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './index.scss';

const Layout = ({ children }) =>(
    <div className="layout">
        <Header/>
        <main className="main">{children}</main>
        <Footer/>
    </div>
)

export default Layout;
