import React from 'react'
import { Link } from 'react-router'

const Map = ()=>(
  <div className="map">
    <h2 id="name">freda suyi nada/ding
      <div className="links">
        <a href="https://github.com/pseuyi">github</a>
        <a href="https://www.linkedin.com/in/pseuyi">linkedin</a>
        <a href="https://www.are.na/freda-nada">are.na</a>
        <a href="mailto:pseuyi@gmail.com?Subject=hi">email</a>
      </div>
    </h2>
    <h2><Link to="notes" className="cloud link-1">notes</Link></h2>
    <h2><Link to="/" className="cloud link-2">portfolio</Link></h2>
    <h2><Link to="about" className="cloud link-3">about</Link></h2>
  </div>
)

export default Map
