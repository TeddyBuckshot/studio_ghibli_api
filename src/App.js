import React from 'react';
import FilmsContainer from './containers/FilmsContainer';
import './App.css';

function App() {

  const films = [
    {
      name: "AllFilms", 
      url: "https://ghibliapi.herokuapp.com/films"
    }
  ]

  return (
    <FilmsContainer films={films}/>
  );
}

export default App;
