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
  const [todos, setTodos] = React.useState(defaultTodos); 
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; 
  const totalTodos = todos.length; 

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase(); // .toLowerCase cuando escribe en minuscula, detecta mayusculas y minusculas 
    return todoText.includes(searchText); // .includes es una propiedad de los strings para detectar lo que se esta digitando
  });

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
        {searchedTodos.map(todo => (
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
