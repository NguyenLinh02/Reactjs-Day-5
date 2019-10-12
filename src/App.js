import React from 'react';
import './App.css';
// import Header from './components/Header';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import Organization from './components/Organization';
// import Project from './components/Project';
// import Img from './components/Images';
// import InformationBasic from './components/InformationBasic';
// import Skills from './components/Skills';
// import Auxilliary from './hoc/Auxilliary';
// import { Button } from 'reactstrap';
//import * as LibComponent from './components';
//import Mock from './mock/Mock';
//import SummaryInfo from './components/SummaryInfo';
//-----------------------------------------------------------------//
import ResumeBuilder from './containers/ResumeBuilder/ResumeBuilder';
function App() {
  // const {total} = Mock;
  // console.log('Libcomponent', LibComponent);
  return (
    // <Auxilliary> 
    //   <Header/>
    //   <div className="body">
    //     <div className="container">
    //       <Education/>
    //       <Experience />
    //       <Organization/>
    //       <Project/>
    //     </div>
    //     <div className="information">
    //       <Img/>
    //       <InformationBasic/>
    //       <Skills/>
    //     </div>
    //   </div>
    // </Auxilliary>


    // <Auxilliary>
    //   <Header/>
    //   <div className="body">
    //     <div className="container">
    //       <Education/>
    //       <Experience/>
    //       <Organization/>
    //       <Project/>
    //       </div>
    //       <div className="information">
    //         <Img/>
    //         <InformationBasic/>
    //         <Skills/>
    //       </div>
    //       {/* <LibComponent.SummaryInfo info={total}>
          
    //       </LibComponent.SummaryInfo> */}
    //     </div>
      
    // </Auxilliary>
    <div>
      <ResumeBuilder/>
    </div>
  );
}

export default App;
