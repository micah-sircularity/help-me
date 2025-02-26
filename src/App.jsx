import React from 'react'
import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text, completed: false }
      ])
    }
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeTodosCount = todos.filter(todo => !todo.completed).length

  return (
    <div className="max-w-lg mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Todo App</h1>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <TodoForm addTodo={addTodo} />
        
        {todos.length > 0 && (
          <>
            <TodoList 
              todos={filteredTodos} 
              toggleTodo={toggleTodo} 
              deleteTodo={deleteTodo} 
              editTodo={editTodo}
            />
            
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
              <span>{activeTodosCount} item{activeTodosCount !== 1 ? 's' : ''} left</span>
              
              <TodoFilter filter={filter} setFilter={setFilter} />
              
              <button 
                onClick={clearCompleted}
                className="hover:text-gray-700 transition-colors"
              >
                Clear completed
              </button>
            </div>
          </>
        )}
        
        {todos.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No todos yet. Add one above!
          </div>
        )}
      </div>
    </div>
  )
}

export default App
