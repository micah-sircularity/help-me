import { useState } from 'react'
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa'

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (editText.trim() !== '') {
      editTodo(todo.id, editText)
      setIsEditing(false)
    }
  }

  return (
    <li className="px-4 py-3 flex items-center">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
      />
      
      {isEditing ? (
        <div className="flex-grow ml-3 flex">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={handleEdit}
            className="ml-2 text-green-500 hover:text-green-700"
          >
            <FaSave />
          </button>
        </div>
      ) : (
        <span 
          className={`ml-3 flex-grow ${todo.completed ? 'line-through text-gray-400' : ''}`}
        >
          {todo.text}
        </span>
      )}
      
      {!isEditing && (
        <div className="flex space-x-2">
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            <FaTrash />
          </button>
        </div>
      )}
    </li>
  )
}

export default TodoItem
