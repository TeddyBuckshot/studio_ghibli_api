import React from 'react';
import FilmItem from './FilmItem';
import "./static/FilmsItems.css"

const FilmsItems = ({ filmList }) => {

    return (
        <div className='all-films'>
            {filmList.map((film, index) => {
                    return(
                    <FilmItem
                        key={film.id}
                        film={film}
                        index={index}
                    />
                    )
            })}
        </div>
    );
};  

export default FilmsItems;
