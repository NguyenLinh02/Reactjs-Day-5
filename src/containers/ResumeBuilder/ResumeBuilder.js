import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Header from '../../components/Resume/Header/Header';
import Body from '../../components/Resume/Body/Body';

class ResumeBuilder extends React.Component {
    render() {
        return (
            <Auxilliary>
                <Header />
                <Body/>         
            </Auxilliary>
        );
    }
}
export default ResumeBuilder;