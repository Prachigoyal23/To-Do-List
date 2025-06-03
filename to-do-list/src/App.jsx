import { useState } from 'react';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, text: newText } : todo
    )));
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <>
      <div className="top-header">
        <Header date={formattedDate} activeCount={activeCount} />
      </div>
      <div className="app">
        <div className="input-container">
          <input 
            type="text" 
            placeholder="Add a task..." 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
          />
          <button onClick={addTodo}><img width="40px" height="40px" src="https://cdn0.iconfinder.com/data/icons/ie_Bright/512/plus_add_green.png" alt="Add Button" /></button>
        </div>
        <ToDoList 
          todos={todos} 
          deleteTodo={deleteTodo} 
          toggleComplete={toggleComplete} 
          editTodo={editTodo} 
        />
      </div>
    </>
  );
}

export default App;

