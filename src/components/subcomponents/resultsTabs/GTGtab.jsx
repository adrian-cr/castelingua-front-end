import React from 'react'
import { isArrEmpty, isLastArrEl } from '../../../modules/checkers.js';
import { Link } from 'react-router-dom';

export default function GTGtab(data) {
  let termNum = 1;
  return (
    <>
      <div className="intro">
        {
          data.intro.map(e => {
            <p>Hi{e}</p>
          })
        }
      </div>
      <ul>
      {/* {
        entries.map(e =>
          <li>
            {
              e.splitText.map(f => {
                switch(f.type) {
                  case "abbr":
                    return <abbr>{f.content}</abbr>
                  case "bib":
                    return <span className="bibliography">{f.content}</span>
                  case "def":
                    return <dfn>{f.content}</dfn>
                  case "em":
                    return <em>{f.content}</em>
                  case "ex":
                    return <span className="example-sentence">{f.content}</span>
                  case "link":
                    return f.scope==="external"? <Link className="link external" to={`/búsqueda/${f.content}`}>{f.content}</Link> : <span className="link internal">{f.content}</span>
                  case "text":
                    return f.content;
                  default: return "";
                }
              }
              )
            }
        </li>
        )
      } */}
      </ul>
      {JSON.stringify(data)}
    </>
  )
}
