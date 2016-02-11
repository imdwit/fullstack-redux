import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', 'Fight Club');
const tally = Map({'Trainspotting': 4, 'Fight Club': 3});

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {pair: pair, tally: tally});
  }
});
