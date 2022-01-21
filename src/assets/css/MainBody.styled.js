import styled from "styled-components";

export const MainBodyStyle = styled.main`
  background: ${({ theme }) => theme.theme1.bgCol};
  color: hsl(233, 71%, 22%);
  flex: 1 1;
  overflow-y: scroll;
  h1,
  h2,
  h3,
  h4 {
    text-transform: capitalize;
    font-size: 2.5rem;

    @media (min-width: 576px) {
      font-size: 3.5rem;
    }
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
    @media (min-width: 992px) {
      font-size: 4rem;
    }
    @media (min-width: 1200px) {
      font-size: 5rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    @media (min-width: 576px) {
      font-size: 2rem;
    }
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 992px) {
      font-size: 2.5rem;
    }
    @media (min-width: 1200px) {
      font-size: 3rem;
    }
  }

  h4 {
    font-size: 1rem;

    @media (min-width: 576px) {
      font-size: 1.3rem;
    }
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    @media (min-width: 992px) {
      font-size: 1.2rem;
    }
    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;

    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }
`;
