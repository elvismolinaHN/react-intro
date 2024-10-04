import React from 'react';
import './TodoSearch.css';

function TodoSearch({
    searchValue,
    setSearchValue,
}) {
    return (
        <input 
            placeholder="Cortar cebolla"
            className="TodoSearch"
            value={searchValue} // searchValue hace que el valor inicial sea null
            onChange={(event) => {
                setSearchValue(event.target.value); // Actualiza el estado a lo que digite el usuario
            }}
        ></input>
    );
}

export { TodoSearch };