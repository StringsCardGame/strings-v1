const initialState = require('../../state')
module.exports = function gameBoard (state = initialState.gameBoard, action) {
  switch (action.type) {
    case 'EXAMINE_TILE':
      return Object.assign({}, state, {
        examinedTile: action.payload
      })
    default:
      return state
  }
}
