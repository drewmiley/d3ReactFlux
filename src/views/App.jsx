import React, { Component } from 'react';

import ActionButton from './components/ActionButton';
import BarChart from './components/BarChart';

const App = (props) => {
	return <div>
		<BarChart data={props.data} />
		<ActionButton onDummyAction={props.onDummyAction} />
	</div>
};

export default App;