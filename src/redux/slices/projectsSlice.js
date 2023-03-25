import { createSlice } from '@reduxjs/toolkit'
import { initialProjects} from '../initialState/initialProjects'

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: initialProjects,
    reducers: {
        CREATE_PROJECT: (state, action) => { 
            state.projects.push(action.payload)
        },
        DELETE_PROJECT: (state, action) => { 
            state.projects = state.projects.filter( project => project.id != action.payload) 
        }
    }
})

export const { CREATE_PROJECT, DELETE_PROJECT } = projectsSlice.actions
export default projectsSlice