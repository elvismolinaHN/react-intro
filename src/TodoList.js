import './TodoList.css';

function TodoList({ children }) { // Renderiza los componentes de TodoItem.
    return (
        <ul className="TodoList"> 
            {children} 
        </ul>
    );
}

export { TodoList };