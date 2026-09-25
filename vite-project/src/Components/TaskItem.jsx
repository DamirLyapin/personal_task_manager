const TaskItem = ({ task, onDeleteTask, onToggleTask }) => {
  return (
    <li className="task-item">
        <span className="task-text">{task.text}</span>
        <button className="toggle-button" onClick={() => onToggleTask(task.id)}>Выполнена!!</button>
        <button className="delete-task" onClick={() => onDeleteTask(task.id)}>Удалить задачу</button>
    </li>
  )
}

export default TaskItem