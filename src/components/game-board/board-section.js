const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

class BoardSection extends React.Component {

  handleClick(tile){
    console.log('clicked', tile)
  }

  render(){
    console.log(this);
    const { section, dispatch } = this.props
    function displaySection(section, cb){
      return section.map(row => {
        return row.map(cb)
      })
    }
    function displayTile(tile){
      return(
        <div className='tile' onClick={() => dispatch({type: 'EXAMINE_TILE', payload: tile})}>
        {tile.type}<br />
        pop: {tile.population}
        </div>
      )
    }

    return (
      <div>
      {displaySection(section, displayTile)}
      </div>
    )
  }
}

module.exports = BoardSection
