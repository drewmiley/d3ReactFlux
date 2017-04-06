import RecordsStore from '../../src/data/RecordsStore';

describe('RecordsStore', () => {

  const recordsStore = RecordsStore;

  it('should return the selectedId from the initialState as null', () => {
    const initialState = recordsStore.getInitialState();
    expect(initialState.get('selectedId')).toBe(null);
  });

});
