import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() { // Quem import não consegue mudar o nome sem usar o "as", autocomplete mias inteligente
  return (
    <div className="App">
      <>
        <Header />
        <Dashboard />
        <GlobalStyle />
      </>
    </div>
  );
}