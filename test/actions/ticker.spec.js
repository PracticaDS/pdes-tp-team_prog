import { nextTick } from 'actions/ticker';

describe('Ticker Action', () => {
  it('nextTick should return an action', () => {
    expect(nextTick()).toMatchSnapshot();
  });
});
