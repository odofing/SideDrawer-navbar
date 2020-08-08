import React from 'react';
import Classes from './Toolbar.module.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton/DrawerToggleButton';

const toolbar = props => (
<header className={Classes.toolbar}>
<nav className={Classes.toolbar__navigation}>

<div className={Classes.toolbar__ToggleHide}>
    <DrawerToggleButton click={props.drawerClickHandler}/>
</div>

<div className={Classes.toolbar__logo}> <a href="/">MY LOGO</a> </div>
<div className={Classes.align} />
<div className={Classes.toolbar__navigationItem}>
   
    <ul>
        <li> <a href="/">Home  </a> </li>
        <li> <a href="/">Product</a> </li>
        <li> <a href="/">Blog</a> </li>
        <li> <a href="/">Contact Us</a> </li>
    </ul>
</div>
</nav>

</header>

);

 export default toolbar;