import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';

import RecordsActionTypes from './RecordsActionTypes';
import RecordsDispatcher from './RecordsDispatcher';

class RecordsStore extends ReduceStore {
	constructor() {
		super(RecordsDispatcher);
	}

	getInitialState() {
		return ['Hello World', 'Goodbye Spaceman'];
	}

	reduce(state, action) {
		switch(action.type) {
			case RecordsActionTypes.DUMMY_ACTION:
				console.log('DUMMY_ACTION');
				return state;
			default:
				return state;
		}
	}
}

export default new RecordsStore();