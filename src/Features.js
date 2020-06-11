import React from 'react';

import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const Features = props => {

    return (
        <div className="box"> {/*Right Box*/}
            <AdditionalFeatures additionalFeatures={props.features} dispatch={props.dispatch} />
            <Total car={props.car} additionalPrice={props.prices} />
        </div>
    );
};

export default Features;

