import styled from '@emotion/styled'

export const TextArea = styled.textarea`  
  width: 100%;
  padding: 7px 0;
  border: 0;
  border-bottom: 2px solid ${ props => props.theme.colors.primaryLight };
  outline: 0;
  color: ${ props => props.theme.colors.light };
  background: transparent;
  transition: border-color 0.5s;
  &::placeholder{
    color: transparent;
  }  
  &:focus {
    border-bottom: 2px solid ${ props => props.theme.colors.light };
  }
`