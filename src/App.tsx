import React, { useState } from 'react';

const App = () => {
  const [itens, setItens] = useState([]);
  const [novoitem, setnovoitem] = useState('');

  const handleInputChange = (event) => {
    setnovoitem(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    if (novoitem.trim() !== '') {
      setItens([...itens, novoitem]);
      setnovoitem('');
    }
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <form onSubmit={addItem}>
        <input type="text" value={novoitem} onChange={handleInputChange} />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
