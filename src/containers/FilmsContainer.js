import React, { useEffect, useState } from 'react';
import FilmDetails from '../components/FilmDetails';
import FilmsItems from '../components/FilmsItems';
import HeaderNav from '../components/HeaderNav';

const FilmsContainer = ({ films }) => {
  const [filmList, setFilms] = useState([]);
  const [singleFilmId, setSingleFilm] = useState([]);

  useEffect(() => {
    loadFilms(films[0].url)
  }, [films])

  const loadFilms = url => {
    fetch(url)
      .then(result => result.json())
      .then(setfilmList => setFilms(setfilmList))
      .catch(err => console.error);//??
  }

  const handleFilmChange = id => {
    setSingleFilm(id);
  }
  const singleFilm = filmList.find(film => film.id === singleFilmId);

  return (
    <>
      {/* {singleFilm ? <FilmItem film={singleFilm} /> :null} */}
      <HeaderNav
        filmList={filmList}
        handleFilmChange={handleFilmChange}
      />
      {/* <FilmDetails
        film={singleFilm}
      /> */}
      <FilmsItems
        singleFilm = {singleFilm}
        filmList={filmList}
      />
    </>

  )
}

export default FilmsContainer;