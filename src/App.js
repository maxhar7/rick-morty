import imageRickMorty from "./img/rick-morty.png";
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters"; /* lo componentes se declara con la primera letra en mayuscula */

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json(); 
    setCharacters(characterApi.results);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/> /* LLamada al componente Characters.js y se le estan pasando dos props la lista de characters y la funcion setCharacters creadas con el hook useState*/
        ) : (
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home'/>
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>          
          </>
        )}
      </header>
    </div>
  );
}

export default App;
