import React from 'react';

const HeaderNav = ({ filmList, handleFilmChange }) => {

    const handleChange = event => {
        handleFilmChange(event.target.value)
      }

    return(
        <div className='header-nav'>
            <h1>Studio Ghibli Films</h1>
            <select onChange={handleChange}>
                {filmList.map(film => {
                    return <option key={film.id} value={film.id}>{film.title}</option>
                })}
            </select>
        </div>
    )

}

export default HeaderNav;