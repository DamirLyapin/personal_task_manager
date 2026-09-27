const TaskItem = ({ task, onDeleteTask, onToggleTask, onEditingTask }) => {
  return (
    <li className="task-item">
        <span className="task-text">{task.text}</span>
        <button className="editing-button" onClick={() => onEditingTask(task.id)}>Редактировать</button>
        <button className="toggle-button" onClick={() => onToggleTask(task.id)}>Выполнена!!</button>
        <button className="delete-task" onClick={() => onDeleteTask(task.id)}>Удалить задачу</button>
    </li>
  )
}

export default TaskItem