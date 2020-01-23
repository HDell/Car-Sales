import React, { useState } from 'react';
import { connect } from 'react-redux'; // HOC

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';

const Car = props => {

    return (
        <div className="box"> {/*Left Box*/}
            <Header car={props.car} /> {/*Done*/}
            <AddedFeatures car={props.car} dispatch={props.dispatch} /> {/*Done*/}
        </div>
    );
};

export default Car
