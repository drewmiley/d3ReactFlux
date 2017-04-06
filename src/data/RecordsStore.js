import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';

import RecordsActionTypes from './RecordsActionTypes';
import RecordsDispatcher from './RecordsDispatcher';

class RecordsStore extends ReduceStore {
  constructor() {
    super(RecordsDispatcher);
  }

  getInitialState() {
    const data = [{
      id: 1,
      name: 'Hello World',
      score: 2
    }, {
      id: 2,
      name: 'Goodbye Spaceman',
      score: 7
    }, {
      id: 3,
      name: 'Incidus',
      score: 10
    }, {
      id: 4,
      name: 'Salzburger',
      score: 9
    }];
    const title = 'What should I call my band?';
    return Immutable.fromJS({
      data,
      title,
      selectedId: null
    });
  }

  barClick(state, barId) {
    return state.set('selectedId', barId);
  }

  dTitle(state) {
    const randomIndex = Math.floor(Math.random() * state.get('title').length);
    const newTitle = state.get('title').substr(0, randomIndex) + 'd' + state.get('title').substr(randomIndex + 1);
    return state.set('title', newTitle);
  }

  shakePoll(state) {
    return state.update('data',
      data => data.update(data.findIndex(item => item.get('name') === 'Hello World'), item => item.set('score', Math.ceil(Math.random() * 10)))
        .update(data.findIndex(item => item.get('name') === 'Goodbye Spaceman'), item => item.set('score', Math.ceil(Math.random() * 10)))
        .update(data.findIndex(item => item.get('name') === 'Incidus'), item => item.set('score', Math.ceil(Math.random() * 10)))
        .update(data.findIndex(item => item.get('name') === 'Salzburger'), item => item.set('score', Math.ceil(Math.random() * 10))));
  }

  reduce(state, action) {
    switch (action.type) {
      case RecordsActionTypes.BAR_CLICK:
        return this.barClick(state, action.barId);
      case RecordsActionTypes.D_TITLE:
        return this.dTitle(state);
      case RecordsActionTypes.SHAKE_POLL:
        return this.shakePoll(state);
      default:
        return state;
    }
  }
}

export default new RecordsStore();
