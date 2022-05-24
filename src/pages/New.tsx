import styled from "styled-components";
import Button from "../elements/RoundButton";

const New = () => {
  return (
    <div>
      <Card>
        <h2>맛있는전복집</h2>
        <p>리뷰 점수</p>
      </Card>
      <form>
        <fieldset>
          <legend style={{ display: "none" }}>
            마음에 드는 장소를 등록해 보세요
          </legend>
          <input type="radio" id="no" name="isVisited" />
          <RadioBtn htmlFor="no">가 보고 싶어요</RadioBtn>
          <input type="radio" id="yes" name="isVisited" />
          <RadioBtn htmlFor="yes">가 봤어요</RadioBtn>
          {/* <Button>마음에 들어요♥︎</Button> */}
          <Label htmlFor="category">카테고리</Label>
          <SelectWrapper>
            <Select name="category" id="region">
              <option value="">지역 선택</option>
              <option value="서울">서울</option>
              <option value="경기도">경기도</option>
              <option value="포항">포항</option>
              <option value="원주">원주</option>
              <option value="제주">제주</option>
            </Select>
            <Select name="category" id="type">
              <option value="">업종 선택</option>
              <option value="음식점">음식점</option>
              <option value="카페베이커리">카페/베이커리</option>
              <option value="기타">기타</option>
            </Select>
          </SelectWrapper>
          <label htmlFor="memo"></label>
          {/* <Textarea name="memo" id="memo" cols="30" rows="10" placeholder='메모하고 싶은 내용을 입력하세요.'></Textarea> */}
          <SubmitBtn type="submit">저장</SubmitBtn>
        </fieldset>
      </form>
    </div>
  );
};

export default New;

const Card = styled.div`
  background-color: #fff;
  padding: 11px 22px;
  border-radius: 0.625rem;
  margin-bottom: 1rem;
`;

const RadioBtn = styled.label`
  display: inline-block;
  border: solid 2px navy;
  box-sizing: border-box;
  padding: 1rem 1rem;
  border-radius: 0.7rem;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  & + input {
    margin-right: 1rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  margin-bottom: 0.4rem;
`;

const Select = styled.select`
  border: solid 1px #d1d5db;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 0.5rem;
  flex: 1;
  & + select {
    margin-left: 0.5rem;
  }
  option + option {
    margin-left: 0.5rem;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 1.25rem;
  margin: 1rem 0;
`;

const Textarea = styled.textarea`
  border: solid 1px #d1d5db;
  box-sizing: border-box;
  display: block;
  padding: 0.8rem;
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const SubmitBtn = styled.button`
  background-color: #04202f;
  color: #fff;
  padding: 0.625rem 1rem;
  border-radius: 0.3rem;
  font-weight: 700;
  float: right;
`;
