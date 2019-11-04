import React from 'react'

const ReactMarkdown = require('react-markdown')

const Project = (props)=>{
  const projects = props.projects
  return (
    <div className="row">
      {
        projects && projects.map(proj=>(
          <div
            key={proj.name}
            className="col-xs-12
            col-sm-6
            col-md-6
            col-lg-4"
          >
            <div className="project box ">
              <a href={`${proj.url}`} target="_blank" rel="noopener noreferrer">
                <img className="thumbnail" src={process.env.PUBLIC_URL + (proj.imgsrc ? proj.imgsrc : `images/${proj.name}.png`)} alt={`${proj.name} thumbnail`} />
                <h3>{proj.name}</h3>
              </a>
              {
                proj.giturl.length > 0 ?
                (<a
                  href={proj.giturl}
                  className="octicon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {'< / >'}
                </a>)
                : null
              }
              <p className="type">{proj.type}</p>
              <ReactMarkdown className="desc" source={proj.desc} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Project
