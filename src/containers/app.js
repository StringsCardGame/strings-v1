const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const App = (props) => {
  return (
    <div>
      {props.children}
    </div>

  )
}

module.exports = connect((state) => state)(App)
