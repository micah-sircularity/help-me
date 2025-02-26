function TodoFilter({ filter, setFilter }) {
  return (
    <div className="flex space-x-2">
      {['all', 'active', 'completed'].map(status => (
        <button
          key={status}
          onClick={() => setFilter(status)}
          className={`px-2 py-1 rounded capitalize ${
            filter === status 
              ? 'bg-blue-500 text-white' 
              : 'hover:bg-gray-200 text-gray-700'
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
