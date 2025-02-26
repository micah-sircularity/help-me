import React, { useState } from 'react'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border-b border-gray-200">
      <div className="flex items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm
