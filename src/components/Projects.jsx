import React, { Component } from 'react'
import Project from './Project'
import projects from '../projects'

export default class extends Component {
  constructor () {
    super()
    this.state = { projects }
  }
  render () {
    return (
      <div>
        <h1>{'https://'}pseuyi.xyz<br />
          freda suyi nada/ding <br />
          is a chinatown, nyc based web developer <br />
          <div className="links">
            <a href="https://github.com/pseuyi" target="_blank" rel="noopener noreferrer">github</a>
            <a href="https://www.linkedin.com/in/pseuyi" target="_blank" rel="noopener noreferrer">linkedin</a>
            <a href="https://www.are.na/freda-nada" target="_blank" rel="noopener noreferrer">are.na</a>
            <a href="/cv" target="_blank" rel="noopener noreferrer">cv</a>
            <a
              href="mailto:pseuyi@gmail.com?Subject=hi"
              target="_blank" rel="noopener noreferrer"
            >email</a>
          </div>
          select projects they have worked on recently:
        </h1>
        <Project projects={this.state.projects} />
      </div>
    )
  }
}
