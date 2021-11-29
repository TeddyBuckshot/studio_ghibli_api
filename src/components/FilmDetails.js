import React from "react";

const FilmDetails = ({film}) => {

    const altTag = `${film}`; 

    return (
        <div className="film-detail">
          <div className='film-art'>
            <img className='img' src={film.image} alt={altTag} />
          </div>
          <div className='info'>
            <h3>Description:</h3>
            <p>{film.description}</p>
            <h4>Release date: {film.release_date}</h4>
          </div>
        </div>
        );
}

export default FilmDetails;
