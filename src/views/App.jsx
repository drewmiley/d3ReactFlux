import React, { PropTypes } from 'react';

import ActionButton from './components/ActionButton';
import BarChart from './components/BarChart';
import Sparkline from './components/Sparkline';

const App = (props) => {
  return (
    <div>
      <BarChart
        data={ props.data }
        title={ props.title }
        selectedId={ props.selectedId }
        onBarClick={ props.onBarClick }
      />
      <Sparkline
        line={ props.line }
      />
      <ActionButton
        buttonText="D Title"
        onClick={ props.onDTitle }
      />
      <ActionButton
        buttonText="Shake Poll"
        onClick={ props.onShakePoll }
      />
    </div>
  );
};

App.displayName = 'App';
App.propTypes = {
  buttonText: PropTypes.string,
  data: PropTypes.array,
  line: PropTypes.array,
  onBarClick: PropTypes.func,
  onClick: PropTypes.func,
  onDTitle: PropTypes.func,
  onShakePoll: PropTypes.func,
  selectedId: PropTypes.number,
  title: PropTypes.string
};

export default App;
