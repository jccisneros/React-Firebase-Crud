import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 2rem 2rem;
  height: 100%;
  min-height: 100vh;
  background-color: ${ props => props.theme.colors.primaryDark };
  color: ${ props => props.theme.colors.light };
  @media(min-width: 480px){
    padding: 4rem 5rem;
  }
  @media(min-width: 769px){
    padding: 4rem 20rem;
  }
  
`