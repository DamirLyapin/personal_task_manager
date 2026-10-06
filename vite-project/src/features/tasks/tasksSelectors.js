export const selectTasks = (state) => state.tasks.tasks

export const selectFilter = (state) => state.tasks.filter

export const selectVisibleTasks = (state) => {
    let visibleTasks = state.tasks.tasks
    const filterStat = state.tasks.filter
    if (filterStat === 'active') {
        visibleTasks = visibleTasks.filter(task => !task.completed)
    }
    if (filterStat === 'completed') {
        visibleTasks = visibleTasks.filter(task => task.completed)
    }
    return visibleTasks
}

export const selectTotalTasks = (state) => {
    return state.tasks.tasks.length
}

export const selectActiveTasks = (state) => {
    const activeTasks = state.tasks.tasks.filter(task => !task.completed)
    return activeTasks.length
}

export const selectCompletedTasks = (state) => {
    const completedTasks = state.tasks.tasks.filter(task => task.completed)
    return completedTasks.length
}

