import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../features/tasks/taskSlice"
import { selectFilter } from "../features/tasks/tasksSelectors"

const TaskFilters = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)

    const handleAllTasks = () => {
        dispatch(setFilter('all'))
    }

    const handleActiveTasks = () => {
        dispatch(setFilter('active'))
    }

    const handleCompletedTasks = () => {
        dispatch(setFilter('completed'))
    }
    return (
        <div className='filter-container'>
            <button className={filter === 'all' ? 'active' : ''} onClick={() => handleAllTasks()}>Все</button>
            <button className={filter === 'active' ? 'active' : ''} onClick={() => handleActiveTasks()}>Активные</button>
            <button className={filter === 'completed' ? 'active' : ''} onClick={() => handleCompletedTasks()}>Выполненные</button>
        </div>
    )
}

export default TaskFilters
