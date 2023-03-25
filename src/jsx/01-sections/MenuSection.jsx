import { useSelector, useDispatch } from 'react-redux'
import { BoardFormComponent } from '../02-components'
import { SET_PROJECT } from '../../redux/slices/currentProjectSlice'

export const MenuSection = () => {
    const dispatch = useDispatch()
    const { projects } = useSelector(state => state.projects)
    const { currentProject } = useSelector(state => state.currentProject)
  
    const handleGetBoards = (id) => dispatch(SET_PROJECT(id))
        
    return (
        <aside className="aside">
            <div className='aside__wrapper'>
                <BoardFormComponent current="project"/>
                <hr />
                {
                    projects.map( project => 
                        <button key={project.id} id={project.id} 
                            className={`aside__item ${currentProject === project.id ? 'is-project-selected' : ''}`} 
                            onClick={ () => handleGetBoards(project.id) }
                        >
                            {project.name}
                        </button>
                    )
                }
            </div>
        </aside>
    )
}
