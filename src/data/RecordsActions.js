import RecordsActionTypes from './RecordsActionTypes';
import RecordsDispatcher from './RecordsDispatcher';

const Actions = {
	barClick(barId) {
		RecordsDispatcher.dispatch({
			type: RecordsActionTypes.BAR_CLICK,
			barId
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