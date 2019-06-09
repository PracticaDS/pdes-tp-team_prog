import React from 'react'
import './Game.css'

const Game = ({
  renderTicker,
  renderNavBar,
  renderResources,
  renderLeftPanel,
  renderDetail,
  renderFactoryGrid,
}) => (
  <div className="gameMainContainer">
    {renderNavBar()} {/* TODO: when the game has a name, show it */}
    {renderTicker()}
    {renderResources()}
    <div className="HorizontalGameParts">
      <div className="gamePanel gameLeftPanel">{renderLeftPanel()}</div>
      <div className="gameMidPanel">{renderFactoryGrid()}</div>
      <div className="gamePanel gameRightPanel" component_name="game-right-panel">
        {renderDetail()}
      </div>
    </div>
  </div>
)

export default Game
