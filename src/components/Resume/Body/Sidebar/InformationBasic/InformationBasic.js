import React from 'react';
import { FaLocationArrow,FaBirthdayCake, FaTransgender, FaBlenderPhone,FaMailBulk } from 'react-icons/fa';
import Mock from "../../../../../mock/Mock";
import classes from '../../../../../App.css';
const information = () => {
    return(
        <div className={classes.InformationBasic}>
            <h3>{Mock.total.InformationBasic.title}</h3>
            <p><FaBirthdayCake/> {Mock.total.InformationBasic.birthday}</p>
            <p><FaTransgender/> {Mock.total.InformationBasic.gender}</p>
            <p><FaBlenderPhone/> {Mock.total.InformationBasic.phone}</p>
            <p><FaMailBulk/> {Mock.total.InformationBasic.email}</p>
            <p><FaLocationArrow/> {Mock.total.InformationBasic.address}</p>
          </div>
    );
}
export default information;