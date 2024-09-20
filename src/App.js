import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Hice la tarea', completed: false},
  {text: 'Jugue futbol', completed: false},
  {text: 'Complete el curso', completed: true}
];

// El React.Fragment envuelve los componentes.
// El .map crea un nuevo array a partir de haber recorrido uno.
// La propiedad key hace que envie un texto diferente en los componentes TodoItem.

function App() {
  return (
    <React.Fragment> 

      <TodoCounter completed={6} total={9}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
