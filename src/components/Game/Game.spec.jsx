import React from 'react'
import { mount } from 'enzyme'
import Game from './Game'

describe('Game Suite', () => {
  describe('Rendering Game', () => {
    let renderMock = null
    let game = null

    beforeEach(() => {
      renderMock = jest.fn()
      game = mount(
        <Game
          renderTicker={renderMock}
          renderResources={renderMock}
          renderLeftPanel={renderMock}
          renderFactoryGrid={renderMock}
          renderDetail={renderMock}
        />,
      )
    })

    it('Should be defined', () => {
      expect(game).toBeDefined()
    })
    it('should call the render function 5 times', () => {
      expect(renderMock.mock.calls.length).toBe(5)
    })
  })
})
