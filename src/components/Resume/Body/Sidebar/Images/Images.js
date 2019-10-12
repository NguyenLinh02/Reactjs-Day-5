import React from 'react';
import Mock from "../../../../../mock/Mock";

const images = () => {
    return(
        <img alt={Mock.total.Images.alt} src={Mock.total.Images.src}/>
    );
}
export default images;