import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CREATE_BOARD } from '../../redux/slices/boardsSlice'
import { CREATE_PROJECT } from '../../redux/slices/projectsSlice'
import { SET_BOARD, SET_PROJECT } from '../../redux/slices/currentProjectSlice'

export const BoardFormComponent = ({current}) => {
    const dispatch = useDispatch()
    const { currentProject } = useSelector(state => state.currentProject)
    const [board, setBoard] = useState('')

    const handleCreateBoard = () => {
        if(board.trim().length > 0){
            if(current === "board"){
                const id = uuidv4()
                const newBoard = { id: uuidv4(), name: board, project: currentProject }
                dispatch(CREATE_BOARD(newBoard))
                dispatch(SET_BOARD(id))
            }
            if(current === "project"){
                const newProject = { id: uuidv4(), name: board }
                dispatch(CREATE_PROJECT(newProject))
                dispatch(SET_PROJECT(newProject.id))
            }
            setBoard('')
        }
    }
    
    return (
        <form className='board-form'>
            <textarea className="board-form__input" type="text" placeholder={current == "board" ? "Add a new board" : "Add a new project"} value={board} onChange={e => setBoard(e.target.value)}></textarea>
            <button className="board-form__button" type="button" onClick={ handleCreateBoard }>
                <img src="images/plus.svg" alt="Create board" />
            </button>
        </form>
    )
}
