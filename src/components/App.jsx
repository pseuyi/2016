import React from 'react'
import FixedNav from './FixedNav'

export default class extends React.Component {
  render () {
    return (
      <div className="app">
        { this.props.children }
        <FixedNav />
      </div>
    )
  }
}
