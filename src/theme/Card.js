import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px solid ${(props) => props.theme.colors.primaryLight};
  padding: 2rem;
  margin: 1.2rem 0;
  border-radius: 15px;
  box-shadow: 4px 5px 8px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
  &:hover {
    border: 3px solid ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.primaryDark};
  }
  @media (min-width: 480px) {
    margin: 1rem;
  }
  @media (min-width: 769px) {
    margin: 2rem;
  }
`;
