import styled from "@emotion/styled";

export const CardItemDelete = styled.span`
  font-size: 2rem;
  cursor: pointer;
  display: flex;  
  flex-direction: column;
  align-items: center;  
  margin-left: 1rem;
  transition: color .1s;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const CardItemEdit = styled.span`
  font-size: 2rem;
  cursor: pointer;
  display: flex;  
  flex-direction: column;
  align-items: center;  
  margin-left: 1rem;
  transition: color .1s;
  &:hover {
    color: green;
  }
`;

export const CardItemText = styled.p`
  font-size: .5rem;
  font-weight: bold;
  letter-spacing: .15rem;
  margin-top: .3rem;  
`;
