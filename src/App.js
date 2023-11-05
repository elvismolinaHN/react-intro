import React from 'react';
import { TodoCounter } from './TodoCounter'; 
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton  } from './CreateTodoButton';

const defaultTodos = [
  { text: 'cortar cebolla', completed: true},
  { text: 'tomar el curso de intro a react', completed: false},
  { text: 'llorar con la llorona', completed: false},
  { text: 'pintar la casa', completed: false},
  { text: 'usando estados derivados', completed: true},
];

function App() { // Es un componente de react.
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); // Empieza con un string vacio 
  // para que los usuarios no encuentren nada cuando escriban en el input.

  const completedTodos = todos.filter( // Filtramos aquellos objetos donde el completed sea true.
    todo => !!todo.completed // Hace que el valor que busque sea verdadero.
  ).length; 
  const totalTodos = todos.length; // Es el tamaño total del estado "todos".

  const searchedTodos = todos.filter( // Filtra aquellos elementos que escribe el usuario en el input.
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText); 
    }
  );

  const completeTodo = (text) => { // Encuentra aquella tarea que se completo en el todo
    const newTodos = [...todos]; // Los ... lo que hace es crear una copia del estado del array del todo.
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }

  const deleteTodo = (text) => { // Encuentra aquella tarea que se completo en el todo
    const newTodos = [...todos]; // Los ... lo que hace es crear una copia del estado del array del todo.
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }

  return ( // <React.Fragment> Encapsula todos los componentes que lo contienen.
    <React.Fragment> 

      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} // Es un identificador unico que nos pide react.
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)} // No se ejecuta hasta que sucede el 
            onDelete={() => deleteTodo(todo.text)}
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
