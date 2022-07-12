import { deleteSighting } from "./SightingService"
import styled from "styled-components";

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items:center;
border: 3px solid black;
padding: 1rem;
background-color: rgba(255, 255, 255, 0.7);
`

const StyledButton = styled.button`
background-color: #EB5559;
font-weight: bold;
font-size: 30px;
width: 3rem
`

const SightingCard = ({sighting, removeSighting}) => {

    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }
    return (
        <CardContainer>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <img src={sighting.path}/>
            <StyledButton onClick={handleDelete} alt=""> 🗑 </StyledButton>
            <hr></hr>
        </CardContainer>
    )
}

export default SightingCard;