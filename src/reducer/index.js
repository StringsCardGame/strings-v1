const { combineReducers } = require('redux')

const gameBoard = require('./game-board')

module.exports = combineReducers({
  gameBoard
})
