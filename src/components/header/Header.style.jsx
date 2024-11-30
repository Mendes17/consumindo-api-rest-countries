import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  background-color: #3a89c9;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  max-width: 1280px;
  justify-content: center;
`;

const StyledUl = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const StyledA = styled.a`
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
`;

const StyledH1 = styled.h1`
  font-size: 1.6rem;
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
`

export { StyledHeader, StyledNav, StyledUl, StyledA, StyledH1 };
