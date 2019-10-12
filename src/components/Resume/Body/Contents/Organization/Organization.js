import React from 'react';
import Mock from "../../../../../mock/Mock";
import classes from '../../../../../App.css';
const organization = () => {
    return(
        <div className={classes.organization}>
          <h4>{Mock.total.Organization.title}</h4>
          <p>{Mock.total.Organization.nameorganization}</p>
          <i>{Mock.total.Organization.describe}</i>
          </div>
    );
}
export default organization;