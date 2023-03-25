import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BoardComponent, BoardFormComponent, CardComponent, TaskFormComponent, FooterComponent } from '../02-components'

export const BoardsSection = () => {
    const { currentProject } = useSelector(state => state.currentProject)
    const { tasks } = useSelector(state => state.tasks)
	const { boards } = useSelector(state => state.boards)	
	const [ draggedItem, setDraggedItem ] = useState(null)

    if(!currentProject){  
        return (
            <section className='boards boards--empty'>
                <h2 className='boards__title'>Select a project</h2>
            </section> 
        )
    }

    return (
        <section className='boards'>
            <div className='boards__wrapper'>
                {
                    boards?.map( board => (
                        board.project == currentProject && 
                        <BoardComponent key={board.id} id={board.id} board={board.name} draggedItem={draggedItem}>
                            { 
                                tasks?.map( task => task.board === board.id && <CardComponent key={task.id} {...task} setDraggedItem={setDraggedItem}/> )
                            }
                            <TaskFormComponent id={board.id}/>
                        </BoardComponent>
                    ))
			    }
                <BoardFormComponent current="board"/>
                <FooterComponent />
            </div>
        </section>
    )
}
