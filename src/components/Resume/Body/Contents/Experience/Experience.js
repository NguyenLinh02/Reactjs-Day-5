import React from 'react';
import Mock from '../../../../../mock/Mock';
import classes from '../../../../../App.css';
const experience = () => {
    return (
        <div className={classes.experience}>
          <h3>{Mock.total.Experience.contenttitle}</h3>
          <h4>{Mock.total.Experience.position}</h4>
          <p>{Mock.total.Experience.nameschool}</p>
          <i>{Mock.total.Experience.time}</i>
          </div>
    );
}
export default experience;