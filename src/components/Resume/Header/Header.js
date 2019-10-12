import React from 'react';
import Mock from '../../../mock/Mock';
import classes from '../../../App.css';

const header = () => { 
    return (
        <div className={classes.HeaderTitle}>
            <h1>{Mock.total.Header.name}</h1>
            <i>{Mock.total.Header.content}</i>
        </div>
    );
}
export default header;