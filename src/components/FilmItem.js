import React from 'react';
import "./static/FilmItem.css"

const FilmItem = ({film, handleFilmClick}) => {

  const handleClick = () => {
    handleFilmClick(film)
  }

  const altTag = `${film.title}`;  
  return (
    <div className="film">
      <div className='film-art-click'>
        <img className='img' src={film.image} alt={altTag} />
        <div className="middle">
          <button onClick={handleClick} className="text">More details</button>
        </div>
      </div>
      <div className='info'>
        <h3>{film.title}</h3>
        <h4>{film.director}</h4>
      </div>
    </div>
    );
};

export default FilmItem;
