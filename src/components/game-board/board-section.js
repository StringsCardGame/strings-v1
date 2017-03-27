const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const BoardSection = (props) => {
  const { section } = props
  function displaySection(section, cb){
    return section.map(row => {
      return row.map(cb)
    })
  }
  function displayTile(tile){
    return(
      <div className='tile' >
        {tile.type}<br />
        pop: {tile.population}
      </div>
    )
  }
  console.log(displaySection(section, displayTile))

  return (
    <div>
      {displaySection(section, displayTile)}
    </div>
  )
}

module.exports = BoardSection
