import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Hice la tarea', completed: false},
  {text: 'Jugue futbol', completed: false},
  {text: 'Complete el curso', completed: true},
  {text: 'Usando estados derivados', completed: true}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos); // React.useState(defaultTodos) es el estado inicial
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; // Filtra los elementos que ya fueron completados
  const totalTodos = todos.length; // Es un estado derivado porque toma funcionalidades de otro estado

  console.log('Los usuarios buscan todos de: ' + searchValue);

  return (
    <> 
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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

    </>
  );
}

export default App;
