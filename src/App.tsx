import styled from 'styled-components'

const Title = styled.h1`
  color: #8257e6;
`

export function App() { // Quem import não consegue mudar o nome sem usar o "as", autocomplete mias inteligente
  return (
    <div className="App">
      <Title>HelloWorld</Title>
      
    </div>
  );
}