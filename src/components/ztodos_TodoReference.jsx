import { useState, useEffect } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

const Todos = () => {
  const [ todos, setTodos ] = useState([]);
  const [ userName, setUserName ] = useState('');
  const [ todo, setTodo ] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        console.log(json);
      })
  }, []);

  const handleInputChange = (event) => {
    if (event.target.name === 'todoInput') {
      setTodo(event.target.value);
    } else {
      setUserName(event.target.value);
    }
  }

  const handleAddTodo = () => {
    if (userName.trim().length === 0) {
      return alert('Username must be provided');
    }
    if (todo.trim().length === 0) {
      return alert('Todo must be provided');
    }

  //  Create a new array with all the contents of the old array
    const newTodosState = [
      {
        todo,
        username: userName,
      },
      ...todos,
    ];

    //trigger rerender by updating the old todos state with the new array
    setTodos(newTodosState);
    setTodo('');
    setUserName('');
  };

  if (isLoading) {
    return <PacmanLoader/>;
  }

  return (
    <div>
      <input
        placeholder='Enter a todo'
        value={todo}
        name='todoInput'
        onChange={handleInputChange}
      />
      <input
        placeholder='Enter your username'
        value={userName}
        name='usernameInput'
        onChange={handleInputChange}
      />

      <button
        onClick={handleAddTodo}
      >
        Add Todo
      </button>


      <h3>Todo List</h3>

      {
        todos.length === 0 ?
          <p>No todos created yet</p>
          :
          <ul>
            {
              todos.map((todo, index) => {
                return (
                  <li key={index}>
                    <p>Username: {todo.username}</p>
                    <p>Todo: {todo.todo}</p>
                  </li>
                );
              })
            }
          </ul>
      }

      <hr/>
    </div>
  )
}

export default Todos;