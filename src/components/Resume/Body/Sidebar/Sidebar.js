import React from "react";
import classes from '../../../../App.css'
import Img from './Images/Images';
import InformationBasic from './InformationBasic/InformationBasic';
import Skills from './Skills/Skills';
const sideBar = () => {
    return(
        <div className={classes.information}>
            <Img/>
            <InformationBasic/>
            <Skills/>
        </div>
    );
}
export default sideBar;