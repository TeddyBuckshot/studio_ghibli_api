import React from 'react';
import FilmItem from './FilmItem';
import "./static/FilmsItems.css"

const FilmsItems = ({ filmList, singleFilm }) => {

    return (
        <div className='all-films'>
            {filmList.map((film, index) => {
                if (singleFilm === undefined){
                    return(
                        <FilmItem
                            key={film.id}
                            film={film}
                            index={index}
                        />
                    )
                } else if (singleFilm === film) {
                    return (
                        <FilmItem
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
