import { configure } from '@storybook/react'

function loadStories() {
  const req = require.context('../src/stories', true, /\.story\.(js|jsx)$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
