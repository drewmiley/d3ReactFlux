import React, { Component } from 'react';

import ActionButton from './components/ActionButton';
import BarChart from './components/BarChart';

const App = (props) => {
	return <div>
		<BarChart
			data={props.data}
			title={props.title}
			selectedId={props.selectedId}
			onBarClick={props.onBarClick} />
		<ActionButton
			buttonText='D Title'
			onClick={props.onDTitle} />
		<ActionButton
			buttonText='Shake Poll'
			onClick={props.onShakePoll} />
	</div>
};

export default App;