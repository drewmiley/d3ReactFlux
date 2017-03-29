import React, { Component } from 'react';

import data from '../data/Store';

import BarChart from './components/BarChart';

class App extends Component {
	render() {
		return <div>
			<BarChart data={data} />
		</div>
	};
};

export default App;