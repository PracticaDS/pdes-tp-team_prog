// @flow
/**
 * @module Actions/Ticker
 * @desc Tick Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const nextTick = createActions({
  [ActionTypes.NEXT_TICK]: () => ({}),
});