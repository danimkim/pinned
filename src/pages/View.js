import styled from "styled-components"
import { DeleteIcon, EditIcon } from "../components/assets";

const View = () => {
    return (
        <div>
            <Card>
            <ul>
                <li>맛있는전복집</li>
                <li>4.0 ⭐⭐⭐⭐</li>
                <li>경북 포항시 남구 구룡포읍</li>
                <li>전복죽 맛집...</li>
            </ul>
            <IconWrapper>
                <EditIcon />
                <DeleteIcon />
            </IconWrapper>
            </Card>
        <MapContainer>
            <h1>
                지도 이미지가 들어올거에요.
            </h1>
        </MapContainer>
        </div>
    )
}

export default View;

const Card = styled.div`
    background-color: #fff;
    border-radius: 0.8rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    & + div {
        margin-top: 0.8rem;
    }
    svg {
        margin-right: 1rem;
    }
`
const IconWrapper = styled.div`
    align-self: flex-start;
`

const MapContainer = styled.div`
    border: solid 1px red;
    border-radius: 0.8rem;
    display: flex;
    height: 70vh;
`