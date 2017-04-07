import RecordsActionTypes from '../../src/data/RecordsActionTypes';
import RecordsStore from '../../src/data/RecordsStore';

describe('RecordsStore', () => {

  const recordsStore = RecordsStore;

  it('should return the selectedId from the initialState as null', () => {
    const initialState = recordsStore.getInitialState();
    expect(initialState.get('selectedId')).toBe(null);
  });

  describe('Reducer', () => {

    it('should add a d to the title when the D_TITLE action type is sent to the reducer', () => {
      const initialState = recordsStore.getInitialState();
      const dTitleAction = { type: RecordsActionTypes.D_TITLE };
      const newState = recordsStore.reduce(initialState, dTitleAction);

      expect(newState.get('title').split('d').length -
        initialState.get('title').split('d').length)
        .toBe(1);
    });

  });

});
