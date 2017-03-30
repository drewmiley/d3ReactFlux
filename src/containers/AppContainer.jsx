import { Container } from 'flux/utils';

import RecordsActions from '../data/RecordsActions';
import RecordsStore from '../data/RecordsStore';
import App from '../views/App';

const getStores = () => {
	return [
		RecordsStore
	];
};

const getState = () => {
	return {
		data: RecordsStore.getState().data,
		title: RecordsStore.getState().title,
		onDummyAction: RecordsActions.dummyAction
	};
};


export default Container.createFunctional(App, getStores, getState);