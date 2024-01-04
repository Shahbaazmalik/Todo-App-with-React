import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo, setTodo] = useState("")           // For individual Todo
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})    //we pass object b/c we are spreding with objects
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex flex-col items-center gap-2">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border  rounded px-3 outline-none duration-150 bg-slate-100 py-1.5 text-black"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;
