import React, { useState } from 'react';
import "./static/FilmItem.css"

const FilmItem = ({film}) => {


  const altTag = `${film.title}`;  
  return (
    <div className="film">
      <div className='film-art-click'>
        <img className='img' src={film.image} alt={altTag} />
        <div className="middle">
          <div className="text">More details</div>
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
