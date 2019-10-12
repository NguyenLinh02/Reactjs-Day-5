import React from 'react';
import Mock from "../../../../../mock/Mock";
import classes from '../../../../../App.css';

const skills = () => {
    return (
        <div className={classes.skills}>
            <h3>{Mock.total.Skills.title}</h3>
            <p>{Mock.total.Skills.content1}</p>
            <p>{Mock.total.Skills.content2}</p>
            <p>{Mock.total.Skills.content3}</p>
            <p>{Mock.total.Skills.content4}</p>
            <p>{Mock.total.Skills.content5}</p>
            <p>{Mock.total.Skills.content6}</p>
            <p>{Mock.total.Skills.content7}</p>
            <p>{Mock.total.Skills.content8}</p>
          </div>
    );
}
export default skills;