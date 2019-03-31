import app from './app'
import github from './github'
import user from './user'
import ticker from './ticker'

export default {
  ...app,
  ...github,
  ...user,
  ...ticker,
};
