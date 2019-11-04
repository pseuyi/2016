import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { Link } from 'react-router'
import home from '../icons/home.png'
import happy from '../icons/happy.png'
import file from '../icons/file.png'
import mail from '../icons/mail.png'

export default class extends Component {
  constructor () {
    super()
    this.state = {
      tooltip: 'ฅ^•ﻌ•^ฅ',
    }
    this.toggleTooltip = this.toggleTooltip.bind(this)
  }
  toggleTooltip (text) {
    this.setState({ tooltip: text })
  }
  render () {
    return (
      <Draggable>
        <div className="fixed-nav">
          <p>{this.state.tooltip}</p>
          <Link to="/">
            <img className="nav-icon" src={home} alt="home icon" onMouseEnter={()=>this.toggleTooltip('HOME')} onMouseLeave={()=>this.toggleTooltip('ฅ^•ﻌ•^ฅ')} />
          </Link>
          <Link to="about">
            <img className="nav-icon" src={happy} alt="happy face icon" onMouseEnter={()=>this.toggleTooltip('ABOUT')} onMouseLeave={()=>this.toggleTooltip('ฅ^•ﻌ•^ฅ')} />
          </Link>
          <Link to="more">
            <img className="nav-icon" src={file} alt="files icon" onMouseEnter={()=>this.toggleTooltip('MORE')} onMouseLeave={()=>this.toggleTooltip('ฅ^•ﻌ•^ฅ')} />
          </Link>
          <a href="mailto:pseuyi@gmail.com?Subject=hi">
            <img className="nav-icon" src={mail} alt="email icon" onMouseEnter={()=>this.toggleTooltip('CONTACT')} onMouseLeave={()=>this.toggleTooltip('ฅ^•ﻌ•^ฅ')} />
          </a>
        </div>
      </Draggable>
    )
  }
}
