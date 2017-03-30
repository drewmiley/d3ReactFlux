import RecordsActionTypes from './RecordsActionTypes';
import RecordsDispatcher from './RecordsDispatcher';

const Actions = {
	dummyAction() {
		RecordsDispatcher.dispatch({
			type: RecordsActionTypes.DUMMY_ACTION
		})
	},
	dTitle() {
		RecordsDispatcher.dispatch({
			type: RecordsActionTypes.D_TITLE
		})
	},
	shakePoll() {
		RecordsDispatcher.dispatch({
			type: RecordsActionTypes.SHAKE_POLL
		})
	}
}

export default Actions;