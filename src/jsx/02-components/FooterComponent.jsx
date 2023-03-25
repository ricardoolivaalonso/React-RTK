import { useSelector, useDispatch } from "react-redux"
import { DELETE_PROJECT } from "../../redux/slices/projectsSlice"
import { DELETE_ALL_BOARD } from "../../redux/slices/boardsSlice"
import { DELETE_ALL_TASK } from "../../redux/slices/tasksSlice"
import { SET_PROJECT } from "../../redux/slices/currentProjectSlice"

export const FooterComponent = () => {
    const dispatch = useDispatch()
    const { currentProject } = useSelector(state => state.currentProject)

    const handleDeleteProject = () => {
        dispatch(DELETE_PROJECT(currentProject))
        dispatch(DELETE_ALL_BOARD(currentProject))
        dispatch(DELETE_ALL_TASK(currentProject))
        dispatch(SET_PROJECT(null))
    }

    return (
        <footer className='footer'>
            <button className="footer__button" onClick={ handleDeleteProject }>Delete this project</button>
        </footer>
    )
}
