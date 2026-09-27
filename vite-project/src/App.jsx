import { useState } from 'react'

import TaskForm from './Components/TaskForm'
import TaskItem from './Components/TaskItem'
import TaskEditing from './Components/TaskEditing'

function App() {
  const [tasks, setTasks] = useState([{ id: 1, text: "Записать задачи на сегодня :)", completed: false }])
  const [editingTaskId, setEditingTaskId] = useState(null)
  
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

  const handltEditTasks = (id) => {
    setEditingTaskId(id)
  }

  const handleSaveTasks = (id, text) => {
    setTasks(prevTasks =>
      prevTasks.map((task) => 
      task.id === id ? { id, text, completed: task.completed } : task)
    )
    setEditingTaskId(null)
  }

  return (
    <div className='container'>
      <h2>Список задач</h2>

      <TaskForm onAddTask={handleAddTask} />

      <ul>
        {tasks.map((task) => 
          task.id === editingTaskId ? <TaskEditing key={task.id} onEditTask={handleSaveTasks} task={task}/> : <TaskItem task={task} key={task.id} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTasks} onEditingTask={handltEditTasks} />
        )}
      </ul>
    </div>
  )
}


export default App