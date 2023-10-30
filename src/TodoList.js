function TodoList(props) { // Renderiza los componentes de TodoItem.
    return (
        <ul> 
            {props.children} 
        </ul>
    );
}

export { TodoList };