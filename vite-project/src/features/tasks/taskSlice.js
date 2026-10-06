import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [{
    id: 1,
    text: "Записать задачи на сегодня :)",
    completed: false
    }],
    filter: 'all'
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: crypto.randomUUID(), text: action.payload, completed: false});
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload)
            if (task) {
                task.completed = !task.completed
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        updateTask: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload.id)
            if (task) {
                task.text = action.payload.text
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { addTask, toggleTask, deleteTask, updateTask, setFilter } = taskSlice.actions

export default taskSlice.reducer
