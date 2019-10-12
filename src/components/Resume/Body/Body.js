import React from 'react';
import Contents from './Contents/Contents';
import classes from '../../../App.css';
import Sidebar from './Sidebar/Sidebar';
const body = () => {
    return (
        <div className={classes.body}>
            <Contents/>
            <Sidebar/>
        </div>
    );
}
export default body;