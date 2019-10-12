import React from 'react';
// import Mock from '../mock/Mock';
import Mock from "../../../../../mock/Mock";
import classes from "../../../../../App.css";
const education = () => {
    console.log('Education', Mock);
    return (
        <div className={classes.education}>
          <h3>{Mock.total.Education.title}</h3>
          <h4>{Mock.total.Education.contenttitle}</h4>
          <p>{Mock.total.Education.nameschool}</p>
          <i>{Mock.total.Education.courses}</i>
        </div>
    );
}
export default education;