import { createSlice } from '@reduxjs/toolkit'
import { initialBoards } from '../initialState/initialBoards'

export const boardsSlice = createSlice({
    name: 'boards',
    initialState: initialBoards,
    reducers: {
        CREATE_BOARD: (state, action) => { 
            state.boards.push(action.payload)
        },
        UPDATE_BOARD: (state, action) => {  
            const index = state.boards.findIndex(board => board.id == action.payload.id)
            state.boards[index].name = action.payload.name
        },
        DELETE_BOARD: (state, action) => { 
            state.boards = state.boards.filter( board => board.id != action.payload) 
        },
        DELETE_ALL_BOARD: (state, action) => {
            state.boards = state.boards.filter( task => task.project != action.payload)
        },
    }
})

export const { CREATE_BOARD, UPDATE_BOARD, DELETE_BOARD, DELETE_ALL_BOARD } = boardsSlice.actions
export default boardsSlice