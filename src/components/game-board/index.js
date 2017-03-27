const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const BoardSection = require('./board-section')

const GameBoard = (props) => {
  const { dispatch, gameBoard } = props
  const { lower } = gameBoard
  return (
    <div>
      <BoardSection section={lower} />
    </div>
  )
}

module.exports = GameBoard
