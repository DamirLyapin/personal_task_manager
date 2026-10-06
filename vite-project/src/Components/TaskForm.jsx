import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

function TaskForm() {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputValue.trim()) return
        dispatch(addTask(inputValue))
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Задачи на сегодня:"/>
            <button type="submit">Добавить</button>
        </form>
    )
}

export default TaskForm