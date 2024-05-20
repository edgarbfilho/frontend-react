import React from 'react';
import CadastroList from './CadastroList';

function App() {
  return (
    <div className="App">
      <header style={{textAlign: 'center'}} className="App-header bg-primary p-2 mb-3">
        <h2 className="text-white">Cadastro</h2>
      </header>
      <main className="container">
        <CadastroList />
      </main>
    </div>
  );
}

export default App;
