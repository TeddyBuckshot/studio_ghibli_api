import React, { useEffect, useState } from 'react';
import FilmDetails from '../components/FilmDetails';
import FilmItem from '../components/FilmItem';
import FilmsItems from '../components/FilmsItems';
import HeaderNav from '../components/HeaderNav';

const FilmsContainer = ({ films }) => {
  const [filmList, setFilms] = useState([]);
  const [singleFilmId, setSingleFilm] = useState(null);
  const [filmDetails, setFilmDetails] = useState(null);

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

  const handleFilmClick = film => {
    setFilmDetails(film)
  }

  const singleFilm = filmList.find(film => film.id === singleFilmId);

  return (
    <>
      {filmDetails ? <FilmDetails film={filmDetails} /> :null}
      <HeaderNav
        filmList={filmList}
        handleFilmChange={handleFilmChange}
      />
      {/* <FilmDetails
        film={filmDetails}
      /> */}
      <FilmsItems
        handleFilmClick={handleFilmClick}
        singleFilm = {singleFilm}
        filmList={filmList}
      />
    </>

  )
}

export default FilmsContainer;