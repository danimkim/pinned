import styled from 'styled-components';
import DeleteIcon from "../@types/assets/DeleteIcon.svg";


const ListCard = () => {
    return (
        <Card>
            <ul>
                <li>맛있는전복집</li>
                <li>4.0 ⭐⭐⭐⭐</li>
                <li>경북 포항시 남구 구룡포읍</li>
                <li>전복죽 맛집...</li>
            </ul>
            <DeleteIcon />
        </Card>
    )
}

export default ListCard;

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