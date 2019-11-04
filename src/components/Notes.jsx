import React from 'react'
import notes from '../notes'
import Project from './Project'

const Notes = ()=>(
  <div>
    <h1>
      more projects <br />
    </h1>
    <h2>
      ongoing projects/<br />
      assorted app sketches/<br />
      writing on new media<br />
    </h2>
    <Project projects={notes} />
  </div>
)

export default Notes
