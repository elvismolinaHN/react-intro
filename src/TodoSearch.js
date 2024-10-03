import './TodoSearch.css'

function TodoSearch() {
    return (
        <input 
            placeholder="Cortar cebolla"
            className="TodoSearch"
            onChange={(event) => {
                console.log(event);
                console.log(event.target); // Trae el html que se esta llamando
                console.log(event.target.value); // Detecta cada silaba que esta escribiendo el usuario
            }}
        ></input>
    );
}

export { TodoSearch };