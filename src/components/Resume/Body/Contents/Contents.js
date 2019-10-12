import React from 'react';
import classes from '../../../../App.css'
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Organization from './Organization/Organization';
import Project from './Project/Project';
const contents = () => {
    return (
        <div className={classes.container}>
            <Education />
            <Experience />
            <Organization />
            <Project />
        </div>
    )
}
export default contents