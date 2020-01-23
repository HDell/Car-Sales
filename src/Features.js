import React, { useState } from 'react';
import { connect } from 'react-redux'; // HOC

import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {buyItem, removeFeature} from "./actions/firstActions";


const Features = props => {

    return (
        <div className="box"> {/*Right Box*/}
            <AdditionalFeatures additionalFeatures={props.features} dispatch={props.dispatch} />
            <Total car={props.car} additionalPrice={props.prices} />
        </div>
    );
};

export default Features;

