import React from 'react';
import Classes from './Backdrop.module.css'

const backdrop = props => (
    <div className={Classes.backdrop} onClick={props.click}/>
);

export default backdrop;