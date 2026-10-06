import { useDispatch } from "react-redux"
import { deleteTask, toggleTask } from "../features/tasks/taskSlice"

const TaskItem = ({ task, onEditingTask }) => {
  
  const dispatch = useDispatch()

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id))
  }

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id))
  }

  return (
    <li className="task-item">
        <span className="task-text">{task.text}</span>
        <button className="editing-button" onClick={() => onEditingTask(task.id)}>Редактировать</button>
        <button className="toggle-button" onClick={() => handleToggleTask(task.id)}>Выполнена!!</button>
        <button className="delete-task" onClick={() => handleDeleteTask(task.id)}>Удалить задачу</button>
    </li>
  )
}

export default TaskItem