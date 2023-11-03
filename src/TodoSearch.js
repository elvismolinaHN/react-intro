import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState(''); // Empieza con un string vacio 
    // para que los usuarios no encuentren nada cuando escriban en el input.

    console.log('Los usuarios buscan todos de ' + searchValue);

    return (
        <input 
            placeholder="Cortar cebolla"
            className="TodoSearch"
            value={searchValue}
            onChange = {(event) => {
                setSearchValue(event.target.value); // Actualiza el valor del estado.
            }}
        />
    );
}

export { TodoSearch };