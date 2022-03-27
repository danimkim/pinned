import styled from "styled-components";
import ListCard from "../components/ListCard";

const List = () => {
    return (
        <div>
            <CategoryName>포항</CategoryName>
            <TabWrapper>
                <input type="radio" id="restaurant"/>
                <CategoryTab htmlFor="restaurant">음식점</CategoryTab>
                <input type="radio" id="cafe"/>
                <CategoryTab htmlFor="cafe">카페/베이커리</CategoryTab>
                <input type="radio" id="etc"/>
                <CategoryTab htmlFor="etc">기타</CategoryTab>
            </TabWrapper>
            <ListCard />
            <ListCard />
        </div>
    )
}

export default List;

const CategoryName = styled.p`
    font-weight: 700;
    text-align: center;
    font-size: 1.625rem;
    margin-bottom: 1rem;
`

const TabWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    input {
        display: none;
    }
`

const CategoryTab = styled.label`
    border: solid 1px navy;
    box-sizing: border-box;
    padding: 1rem;
    font-weight: 700;
    border-radius: 0.8rem;
    &:hover{
        cursor: pointer;
    }
`
