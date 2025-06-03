import { useState } from 'react';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button onClick={handleEdit}>
            <img width="25px" height="25px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ60Qs0BmXnprbtB7DoI_8mF2fRlfaHfPSvQ&s" alt="Save Button" />
          </button>
        </>
      ) : (
        <>
          {/* <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span> */}
          <span>{todo.text}</span>
          <button onClick={() => toggleComplete(todo.id)}>
            <img 
              width="25px" 
              height="25px" 
              src={todo.completed 
                ? "https://img.freepik.com/premium-vector/check-mark-icon-box-square_250841-355.jpg" 
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadOD6zfbb2TR4NAXPISnP4QlyJUs6TJ2J9Q&s"} 
              alt="Toggle Complete" 
              title="Mark as Pending / Complete"
            />
          </button>
    
          <button onClick={() => setIsEditing(true)}>
            <img width="25px" height="25px" src="https://cdn-icons-png.freepik.com/512/8679/8679951.png" alt="Edit Button" />
          </button>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)}>
        <img width="25px" height="25px" src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/garbage_delete.png" alt="Delete utton" />
      </button>
    </li>
  );
}

export default ToDoItem;


