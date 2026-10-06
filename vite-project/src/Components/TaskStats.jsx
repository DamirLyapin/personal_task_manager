import { useSelector } from "react-redux"
import { selectTotalTasks, selectActiveTasks, selectCompletedTasks } from "../features/tasks/tasksSelectors"

const TaskStats = () => {
    const total = useSelector(selectTotalTasks)
    const active = useSelector(selectActiveTasks)
    const completed = useSelector(selectCompletedTasks)

    return (
        <div className="container-stats">
            <h4>Количество</h4>
            <p>Всего: {total}</p>
            <p>Активные: {active}</p>
            <p>Выполненные: {completed}</p>
        </div>
    )
}

export default TaskStats
