import styled from "styled-components";

export const Button = styled.button`
  margin: 25px auto 0 0;
  padding: 0.8em;
  border: none;
  font-size: 0.8em;
  border-radius: 5px;
  background: ${({ theme }) => theme.theme1.navBgCol};
  color: ${({ theme }) => theme.theme1.navTextCol};
  font-weight: bolder;
  cursor: pointer;

  @media (min-width: 768px) {
    margin: 50px auto 0 0;
  }
`;
