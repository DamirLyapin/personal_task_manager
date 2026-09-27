import { useState } from "react"

const TaskEditing = ({ onEditTask, task }) => {
    const [text, setText] = useState(task.text)

    function handleSubmit(event) {
        event.preventDefault()
        if (!text.trim()) return
        onEditTask(task.id, text)
    }

    return (
        <li className="task-item-edit">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">Подтвердить</button>
            </form>
        </li>
    )
}

export default TaskEditing