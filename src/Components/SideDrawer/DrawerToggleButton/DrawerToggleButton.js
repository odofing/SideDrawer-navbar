import React from 'react';
import classes from './DrawerToggleButton.module.css';

const drawerToggleButton = props => (
    <button className={classes.ToggleButton} onClick={props.click}>

        <div className={classes.ToggleButtonLines} />
        <div className={classes.ToggleButtonLine} />
        <div className={classes.ToggleButtonLines} />
        <div className={classes.ToggleButtonLine} />
    </button>
);

export default drawerToggleButton;