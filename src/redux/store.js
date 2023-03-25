import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './slices/tasksSlice'
import boardsSlice from './slices/boardsSlice'
import projectsSlice from './slices/projectsSlice'
import currentProjectSlice from './slices/currentProjectSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
        boards: boardsSlice.reducer,
        projects: projectsSlice.reducer,
        currentProject: currentProjectSlice.reducer
    }
})