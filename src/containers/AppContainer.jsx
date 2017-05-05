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
    data: RecordsStore.getState().get('data').toJS(),
    line: RecordsStore.getState().get('line').toJS(),
    title: RecordsStore.getState().get('title'),
    selectedId: RecordsStore.getState().get('selectedId'),
    onBarClick: RecordsActions.barClick,
    onDTitle: RecordsActions.dTitle,
    onShakePoll: RecordsActions.shakePoll
  };
};


export default Container.createFunctional(App, getStores, getState);
