import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.light};
  border: none;
  margin: 1.2rem auto;
  margin-left: 1rem;
  padding: .7rem 0;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  width: 100%;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 4px 5px 8px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
  &:hover {
    background-color: transparent;
    background-color: ${(props) => props.theme.colors.primaryLight};
    box-shadow: 4px 5px 12px 4px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 769px) {
    width: 45%;
    margin-left: auto;
    padding: 1.2rem 0;
  }
`;
