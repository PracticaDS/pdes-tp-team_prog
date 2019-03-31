import reducer from 'reducers/ticker';
import { ActionTypes } from 'constants/index';

describe('Ticker', () => {
  beforeEach(() => {});

  it(`should handle ${ActionTypes.NEXT_TICK}`, () => {
    expect(
      reducer.tick(undefined, {
        type: ActionTypes.NEXT_TICK,
        payload: {},
      }),
    ).toMatchSnapshot();
  });

  it('The store has changed', () => {
    const initialTick = { tick: 0 };
    const currentStore = reducer.tick(initialTick, { type: ActionTypes.NEXT_TICK, payload: {} });
    expect(currentStore).toEqual({ tick: 1 });
  });
});
