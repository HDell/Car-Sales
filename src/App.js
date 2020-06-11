import React from 'react';

import Car from './Car';
import Features from './Features';

import { connect } from 'react-redux'; // HOC
import { buyItem, removeFeature } from './actions/firstActions';

const App = (props) => {
  return (
    <div className="boxes">
      <Car car={props.car} dispatch={props.removeFeature}/>
      <Features car={props.car} prices={props.additionalPrice} features={props.additionalFeatures} dispatch={props.buyItem}/>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        additionalPrice: state.reducer.additionalPrice,
        car: state.reducer.car,
        additionalFeatures: state.reducer.additionalFeatures
    };
};

export default connect(
    mapStateToProps,
    {buyItem, removeFeature}
)(App);