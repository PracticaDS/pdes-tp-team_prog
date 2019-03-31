import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { STATUS, ActionTypes } from 'constants/index';

export const initialTicker = {
  tick: 0
};

export default {
  user: handleActions(
    {
      [ActionTypes.NEXT_TICK]: state =>
        immutable(state, {
          tick: { $set: state.tick + 1 },
          status: { $set: STATUS.IDLE },
        }),
    },
    initialTicker,
  ),
};
