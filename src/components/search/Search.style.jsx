import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  background-color: blue;
  color: #fff;
  border-radius: 0;
  border: 0;
  padding: 8px;
  border-style: none;
`;

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

const StyledButtonDivFormat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 0px;
  border-style: none;

  &:focus {
    outline: none;
    border-radius: 0px;
    border-style: none;
  }
`;

const StyledButton = styled.button`
  padding: 8px;
  border-style: none;
  cursor: pointer;
  background-color: blue;
  color: #fff;

  &:hover {
    background-color: #4040ef;
  }

  &:active {
    background-color: #1919a1;
  }
`;

const StyledFormatDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledDivH3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export {
  StyledSelect,
  StyledUl,
  StyledLi,
  StyledButtonDivFormat,
  StyledInput,
  StyledButton,
  StyledFormatDiv,
  StyledDivH3,
};
