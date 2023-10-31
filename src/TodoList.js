function TodoList({ children }) { // Renderiza los componentes de TodoItem.
    return (
        <ul> 
            {children} 
        </ul>
    );
}

export { TodoList };