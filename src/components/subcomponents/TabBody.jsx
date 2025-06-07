import React from 'react'
import { isArrEmpty, isLastArrEl } from '../../modules/checkers.js';
import "../../styles/components/subcomponents/TabBody.css"
import { commaSepList } from '../../modules/formatters.js';

export default function TabBody({resource}) {
  const terms = resource.terms;
  const relTerms = resource.relatedTerms;
  let termNum = 1;

  return (
    <>
      {
        terms.map(term =>
          <>
            <h1>{`${resource.word}`}<sup>{terms.length>1? termNum++ : ""}</sup></h1>{/* FIX: WRONG CONDITIONAL POSITION */}
            {term.etymology && <p>{term.etymology}</p>}
            <ol>
              {term.entries.map(entry =>
                  <li>
                    <abbr>{entry.POS}</abbr> {entry.definition}<br></br>
                    {!isArrEmpty(entry.synonyms) && <span><abbr>SIN.:</abbr> {commaSepList(entry.synonyms)}</span>}
                  </li>
              )}
            </ol>
            {
              !isArrEmpty(term.phrases) &&
                term.phrases.map(phrase =>
                  <>
                    <h3>{phrase.phrase}</h3>
                    <ol>
                      {
                        phrase.entries.map(phraseEntry =>
                          <li>
                            <abbr>{phraseEntry.POS}</abbr> {phraseEntry.definition}<br></br>
                            {phraseEntry.exampleSentence && <span>p.ej.: <span className="example-sentence">{phraseEntry.exampleSentence}</span></span>}
                          </li>
                        )
                      }
                    </ol>
                  </>
                )
            }
          </>
        )
      }
      {
        !isArrEmpty(relTerms) &&
          <>
            <h2>Sinónimos o afines de «{resource.word}»</h2>
            {
              relTerms.length === 1?
                <p>{commaSepList(relTerms[0])}</p>
                :
                <ul>
                  {relTerms.map(termGroup => <li>{commaSepList(termGroup)}</li>)}
                </ul>
            }
          </>
      }
    </>
  )
}
