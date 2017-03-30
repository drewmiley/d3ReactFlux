import React, { Component } from 'react';

import data from '../data/Store';

import BarChart from './components/BarChart';

const App = (props) => {
	return <div>
		<BarChart data={props.data} />
	</div>
};

export default App;