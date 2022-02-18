import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

export function App() { // Quem import não consegue mudar o nome sem usar o "as", autocomplete mias inteligente

  Modal.setAppElement('#root');

  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false);

    //quando a função é executada a partir de uma ação do usuário, usar handle como prefixo
    function handleOpenNewTransactionModal(){
        setNewTransactionModalIsOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setNewTransactionModalIsOpen(false);
    }

  return (
    <div className="App">
      <>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard />      
        <NewTransactionModal 
          isOpen={newTransactionModalIsOpen }
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
      </>
    </div>
  );
}