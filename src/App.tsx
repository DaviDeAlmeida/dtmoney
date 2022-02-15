import { GlobalStyle } from "./styles/global";

export function App() { // Quem import não consegue mudar o nome sem usar o "as", autocomplete mias inteligente
  return (
    <div className="App">
      <h1>HelloWorld</h1>
      <GlobalStyle />
    </div>
  );
}