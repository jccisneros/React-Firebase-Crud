import styled from "@emotion/styled";

export const CardButton = styled.a`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.light};
  border: none;
  margin: 2rem 0;
  padding: 1rem 2rem;
  // font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  text-align: center;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 2px 3px 6px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
  &:hover {
    background-color: transparent;
    background-color: ${(props) => props.theme.colors.primaryLight};
    box-shadow: 2px 3px 6px 2px rgba(0, 0, 0, 0.2);
  }
`;
