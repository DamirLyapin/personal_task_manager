import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TaskForm from './Components/TaskForm'
import TaskItem from './Components/TaskItem'
import TaskEditing from './Components/TaskEditing'
import TaskHeader from './Components/TaskHeader'
import { updateTask } from './features/tasks/taskSlice'
import { selectVisibleTasks } from './features/tasks/tasksSelectors'

function App() {

  const visibleTasks = useSelector(selectVisibleTasks)
  const dispatch = useDispatch()
  const [editingTaskId, setEditingTaskId] = useState(null)
  
  const handleEditTask = (id) => {
    setEditingTaskId(id)
  }

  const handleSaveTasks = (id, text) => {
    dispatch(updateTask({ text, id }))
    setEditingTaskId(null)
  }

  return (
    <div className='container'>
      <h2>Список задач</h2>

      <TaskForm/>

      <TaskHeader/>

      <ul>
        {visibleTasks.map((task) => 
          task.id === editingTaskId ? <TaskEditing key={task.id} onEditTask={handleSaveTasks} task={task}/> : 
            <TaskItem task={task} key={task.id} onEditingTask={handleEditTask} />
        )}
      </ul>
    </div>
  )
}


export default App
