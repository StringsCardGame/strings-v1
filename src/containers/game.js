const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const GameBoard = require('../components/game-board')

const Game = (props) => {
  return (
    <div>
      <GameBoard {...props}/>
    </div>
  )
}

module.exports = connect((state) => state)(Game)
