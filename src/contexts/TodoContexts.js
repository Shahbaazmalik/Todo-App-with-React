import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",             //properties
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},          // Functionality
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {       
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
