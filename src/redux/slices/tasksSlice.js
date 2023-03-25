import { createSlice } from '@reduxjs/toolkit'
import { initialTasks } from '../initialState/initialTasks'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasks,
    reducers: {
        CREATE_TASK: (state, action) => { 
            state.tasks.push(action.payload) 
        },
        UPDATE_TASK: (state, action) => {  
            const index = state.tasks.findIndex(task => task.id == action.payload.id)
            state.tasks[index].content = action.payload.content
        },
        DELETE_TASK: (state, action) => { 
            state.tasks = state.tasks.filter( task => task.id != action.payload) 
        },
        DELETE_ALL_TASK: (state, action) => {
            state.tasks = state.tasks.filter( task => task.id != action.payload || task.project != action.payload)
        },
        MOVE_TASK: (state, action) => {
            const index = state.tasks.findIndex(task => task.id == action.payload.draggedItem)
            state.tasks[index].board = action.payload.board
        }
    }
})

export const { CREATE_TASK, UPDATE_TASK, DELETE_TASK, DELETE_ALL_TASK, MOVE_TASK } = tasksSlice.actions
export default tasksSlice