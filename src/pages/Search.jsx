import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/pages/Search.css"
import { isObjEmpty } from "../modules/checkers"
import { Container } from '@mui/material';
import ResourceTabs from '../components/ResourceTabs';
 const Search = () => {
  const {word} = useParams();
  const [wordData, setWordData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setWordData({});
    setLoading(true);
    setError(null);

    fetchWordData()
  }, [word]);
  const fetchWordData = async () => {
    try {
      const responseDLE = await fetch(
        `${process.env.REACT_APP_BASE_URL}dle/${encodeURIComponent(word)}`
      );
      const responseDPD = await fetch(
        `${process.env.REACT_APP_BASE_URL}dpd/${encodeURIComponent(word)}`
      );
      const responseGTG = await fetch(
        `${process.env.REACT_APP_BASE_URL}gtg/${encodeURIComponent(word)}`
      );

      /* if (!responseDLE.ok && !responseDPD.ok && !responseGTG.ok) {
        throw new Error("¡Ups! Tuvimos un problema. Vuelve a intentarlo más tarde.");
      } */

      if (resourcesAvailable([responseDLE, responseDPD, responseGTG])) {
        const wordDataDLE = responseDLE.ok? await responseDLE.json() : {};
        const wordDataDPD = responseDPD.ok? await responseDPD.json() : {};
        const wordDataGTG = responseGTG.ok? await responseGTG.json() : {};
        setWordData({DLE: wordDataDLE, DPD: wordDataDPD, GTG: wordDataGTG});
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const resourcesAvailable = arr => {
    return arr.some(e => e.ok);
  }

  return (
    <>
      <Navbar></Navbar>
      {

        <main id="search-main">
          <h1 id="term">{word}</h1>
          {<Container id="resources">
            <ResourceTabs wordData={wordData}/>
          </Container>}
          {/* <div>{JSON.stringify(wordData)}</div> */}
        </main>
      }
    </>
  )
}

export default Search;
