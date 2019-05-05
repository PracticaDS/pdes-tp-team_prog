import React from 'react'
import './Game.css'

const Game = ({
  renderTicker,
  renderResources,
  renderLeftPanel,
  renderDetail,
  renderFactoryGrid,
}) => (
  <div className="gameMainContainer">
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
