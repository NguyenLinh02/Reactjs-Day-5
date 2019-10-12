import React from 'react';
import Mock from "../../../../../mock/Mock";
import classes from '../../../../../App.css'
const project = () =>{
    return(
        <div className={classes.project}>
          <h3>{Mock.total.Project.title}</h3>
          <h4>{Mock.total.Project.nameProject1}</h4>
          <i>{Mock.total.Project.contentProject1}</i>
          <h4>{Mock.total.Project.nameProject2}</h4>
          <i>{Mock.total.Project.contentProject2}</i>
          <h4>{Mock.total.Project.nameProject3}</h4>
          <i>{Mock.total.Project.contentProject3}</i>
          <h4>{Mock.total.Project.nameProject4}</h4>
          <i>{Mock.total.Project.contentProject4}</i>
          <h4>{Mock.total.Project.nameProject5}</h4>
          <i>{Mock.total.Project.contentProject5}</i>
          <h4>{Mock.total.Project.nameProject6}</h4>
          <i>{Mock.total.Project.contentProject6}</i>
          <h4>{Mock.total.Project.nameProject7}</h4>
          <i>{Mock.total.Project.contentProject7}</i>
          </div>
    );
}
export default project;