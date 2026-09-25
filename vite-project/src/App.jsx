import { useState } from 'react'
import _ from 'lodash'

import TaskForm from './Components/TaskForm'
import TaskItem from './Components/TaskItem'


function App() {
  const [tasks, setTasks] = useState([{ id: 1, text: "Записать задачи на сегодня :)", completed: false }])
  
  const handleAddTask = (text) => {
    const newTask = { id: crypto.randomUUID(), text, completed: false }
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  const handleToggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task)
    )
  }

  const handleDeleteTasks = (id) => {
    setTasks(prevTasks => 
      prevTasks.filter((task) => task.id !== id)
    )
  }

  return (
    <div className='container'>
      <h2>Список задач</h2>

      <TaskForm onAddTask={handleAddTask} />

      <ul>
        {tasks.map((task) => 
          <TaskItem task={task} key={task.id} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTasks} />
        )}
      </ul>
    </div>
  )
}


export default App