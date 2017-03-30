import RecordsActionTypes from './RecordsActionTypes';
import RecordsDispatcher from './RecordsDispatcher';

const Actions = {
	dummyAction() {
		RecordsDispatcher.dispatch({
			type: TodoAction.DUMMY_ACTION
		})
	}
}

export default Actions;