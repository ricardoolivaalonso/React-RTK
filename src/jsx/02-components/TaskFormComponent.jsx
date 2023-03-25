import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSetHeight } from '../00-helpers/handleSetHeight'
import { CREATE_TASK } from '../../redux/slices/tasksSlice'
import { SET_BOARD } from '../../redux/slices/currentProjectSlice'

export const TaskFormComponent = ({id}) => {
    const dispatch = useDispatch()
    const { currentProject } = useSelector(state => state.currentProject)
    const [task, setTask] = useState('')
    
    const handleCreateTask = (e) => {
        if(task.trim().length > 0){
            const newTask = {
                id: uuidv4(),
                content: task,
                board: id,
                project: currentProject
            }

            dispatch(SET_BOARD(id))
            dispatch(CREATE_TASK(newTask))
            setTask('')
            e.target.parentElement.children[0].style.height = '48px'
        }
    }

    return (
        <form className="task-form">
            <textarea className='task-form__input' type="text" placeholder="Create new task" 
                value={task} 
                onChange={e => setTask(e.target.value)} 
                onKeyUp={(e) => handleSetHeight(e)}
            />
            <button className='task-form__button' type="button" onClick={ handleCreateTask } >
                <img src="images/plus.svg" alt="Add task" />
            </button>
        </form>
    )
}
