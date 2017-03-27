const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const BoardSection = require('./board-section')

const GameBoard = (props) => {
  const { dispatch, gameBoard } = props
  const { lower, middle, upper, examinedTile } = gameBoard
  const tileDisplayed = examinedTile
    ?(<div>
        type: {examinedTile.type} <br />
        population: {examinedTile.population}
      </div>)
    : null
  return (
    <div>
      <div>
        <BoardSection section={lower} dispatch={dispatch} /><br /><br />
        <BoardSection section={middle} dispatch={dispatch} /><br /><br />
        <BoardSection section={upper} dispatch={dispatch} />
      </div>
        {tileDisplayed}
    </div>
  )
}

module.exports = GameBoard
