import React from 'react';
import { TodoCounter } from './TodoCounter'; 
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton  } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text: 'cortar cebolla', completed: true},
  { text: 'tomar el curso de intro a react', completed: false},
  { text: 'llorar con la llorona', completed: false},
  { text: 'pintar la casa', completed: false},
];

function App() { // Es un componente de react.
  return ( // <React.Fragment> Encapsula todos los componentes que lo contienen.
    <React.Fragment> 

      <TodoCounter completed={5} total={8}/>
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
} // Se le agrega la llave todo.text para que no imprima el mismo valor en la pagina y tenga un identificador 
  // distinto.
// Los componentes reciben propiedades.

export default App;
