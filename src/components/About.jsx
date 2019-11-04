import React from 'react'

const About = ()=>(
  <div className="about">
    <h1>about</h1>

    <ul>
      <li className="desc">
        <p>freda nada (freda suyi ding) is a web developer based in chinatown, nyc <br />
        interested in topics related to new media, creative coding, and frameworks for social progress
        </p>
      </li>
      <div className="row">
        <li
          className="col-xs-12
          col-sm-6
          col-md-6
          col-lg-6"
        >
          <h4>currently</h4>
          <p>* teaching fellow and engineering intern for an immersive online code school<br />
            * mentor for syrian women learning javascript
          </p>
        </li>
        <li
          className="col-xs-12
          col-sm-6
          col-md-6
          col-lg-6"
        >
          <h4>previously</h4>
          <p>
            * freelance @ NEW INC<br />
            * live programming intern @ PS1<br />
            * management consultant in silicon valley<br />
            * data analyst @ AOL
          </p>
        </li>
      </div>
    </ul>
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
  </div>
)

export default About
