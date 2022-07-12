import { useState, useEffect } from "react";
import './App.css';
import styled from 'styled-components';
import SightingsForm from "./SightingsForm";
import SightingsGrid from "./SightingsGrid";
import { getSightings } from "./SightingService";

const Title = styled.h1`
text-align: center;
font-size: 1.5em;
color: #fff;
background-color: #062c43;
margin: 0;
padding: 1em
`

const Container = styled.div`
background-color: #B5DAFE;
`


function App() {

  const [birdSightings, setBirdSightings] = useState([]);

  useEffect(()=>{
    getSightings().then((allSightings)=>{
      setBirdSightings(allSightings);
    })
  }, []);

  const addSighting = (sighting) =>{
    const temp = birdSightings.map(s =>s);
    temp.push(sighting);
    setBirdSightings(temp);
  }

  const removeSighting = (id) => {
    const temp = birdSightings.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setBirdSightings(temp);
  }

  return (
    <Container>
      <Title>Bird Sightings Website</Title>
      <SightingsForm addSighting={addSighting}/>
      <SightingsGrid sightings={birdSightings} removeSighting={removeSighting} />
    </Container>
  );
}

export default App;
