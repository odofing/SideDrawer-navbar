import React from 'react';
import Classes from './SideDrawer.module.css';

const sideDrawer = props => (

<nav className={Classes.sideDrawer}>
    <ul className={Classes.sideDrawer__Side}>
        <li> <a href="/">Home</a> </li>
        <li> <a href="/">Product</a> </li>
        <li> <a href="/">Blog</a> </li>
        <li> <a href="/">Contact Us</a> </li>
    </ul>
</nav>
);
export default sideDrawer;