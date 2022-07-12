import SightingCard from "./SightingCard";
import styled from "styled-components";

const SightingContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const SightingsGrid = ({sightings, removeSighting}) => {
    
    const sightingsList = sightings.map((sighting) =>{
        return <SightingCard sighting={sighting} key={sighting._id} removeSighting={removeSighting} />
    });
    
    return (
        <SightingContainer>
            {sightingsList}
        </SightingContainer>
    );

}

export default SightingsGrid;