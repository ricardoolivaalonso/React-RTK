import { createSlice } from '@reduxjs/toolkit'
import { initialCurrentProject } from '../initialState/initialCurrentProject'

export const currentProjectSlice = createSlice({
    name: 'currentProject',
    initialState: initialCurrentProject,
    reducers: {
        SET_PROJECT: (state, action) => { state.currentProject = action.payload },
        SET_BOARD: (state, action) => { state.currentBoard = action.payload }
    }
})
export const { SET_PROJECT, SET_BOARD } = currentProjectSlice.actions
export default currentProjectSlice