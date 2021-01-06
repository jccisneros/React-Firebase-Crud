import styled from "@emotion/styled";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 15px;
  box-shadow: 8px 10px 40px 10px rgba(0, 0, 0, 0);
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 480px) {
    grid-template-columns: 50% 50%;
  }
`;
