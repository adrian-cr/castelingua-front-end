import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/pages/Search.css"
import { isObjEmpty } from "../modules/checkers"
import { Container } from '@mui/material';
import ResourceTabs from '../components/ResourceTabs';
import NotFoundScreen from "../components/NotFoundScreen";
import Spinner from "../components/Spinner";
 const Search = () => {
  const {word} = useParams();
  const [wordData, setWordData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const resourcesAvailable = arr => {
    return arr.some(e => e.ok);
  };
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

      if (resourcesAvailable([responseDLE, responseDPD, responseGTG])) {
        const wordDataDLE = responseDLE.ok? await responseDLE.json() : {};
        const wordDataDPD = responseDPD.ok? await responseDPD.json() : {};
        const wordDataGTG = responseGTG.ok? await responseGTG.json() : {};

        const newWordData = {
          DLE: {
            name: "Diccionario de la Lengua Española (DLE)",
            ...wordDataDLE
          },
          DPD: {
            name: "Diccionario Panhispánico de Dudas (DPD)",
            ...wordDataDPD
          },
          GTG: {
            name: "Glosario de Términos Gramaticales (GTG)",
            ...wordDataGTG
          }
        }
        setWordData(newWordData);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setWordData({});
    setLoading(true);
    setError(null);
    fetchWordData()
  }, [word]);

  return (
    <main className="search-main">
      <Navbar></Navbar>
      {loading && <Spinner/>}
      {
        !isObjEmpty(wordData)?
        <div className="search-container">
          <h1 id="term">{word}</h1>
          {
          <Container id="resources">
            <ResourceTabs wordData={wordData}/>
          </Container>
          }
    </div>
        :
        !loading && <NotFoundScreen type="search" word={word}/>
      }
    </main>
  )
}

export default Search;
