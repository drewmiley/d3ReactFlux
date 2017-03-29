import React, { Component } from 'react';

import BarChart from './components/BarChart';

class App extends Component {
	render() {
		return <div>
			<BarChart data='Hello World' />
		</div>
	};
};

export default App;