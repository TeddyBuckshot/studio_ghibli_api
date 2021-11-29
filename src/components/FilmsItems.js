import React from 'react';
import FilmItem from './FilmItem';
import "./static/FilmsItems.css"

const FilmsItems = ({ filmList, singleFilm, handleFilmClick }) => {

    return (
        <div className='all-films'>
            {filmList.map((film, index) => {
                if (singleFilm === undefined){
                    return(
                        <FilmItem
                            handleFilmClick = {handleFilmClick}
                            key={film.id}
                            film={film}
                            index={index}
                        />
                    )
                } else if (singleFilm === film) {
                    return (
                        <FilmItem
                            handleFilmClick = {handleFilmClick}
                            key={film.id}
                            film={film}
                            index={index}
                        />
                    )
                }
            })}
        </div>
    );
};  

export default FilmsItems;
