import { RESTART_CURRENCY, INCREMENT_CURRENCY } from '../utils/actionTypes'

export const restartCurrency = () => ({
  type: RESTART_CURRENCY,
  body: {},
})

export const incrementCurrency = addedCurrency => ({
  type: INCREMENT_CURRENCY,
  body: { addedCurrency },
})
