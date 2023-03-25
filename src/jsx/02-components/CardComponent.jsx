import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_TASK, DELETE_TASK } from '../../redux/slices/tasksSlice'
import { handleSetHeight } from '../00-helpers/handleSetHeight'
import { ButtonElement } from '../03-elements/ButtonElement'

export const CardComponent = ({id, content, setDraggedItem}) => {
	const dispatch = useDispatch()
	const [task, setTask] = useState(content)
	const [isVisible, setIsVisible] = useState(false)
	const [isOverlayVisible, setIsOverlayVisible] = useState(false)
	const [isDraggable, setIsDraggable] = useState(true)

	const handleEditTask = () => {
		setIsVisible(true)
		setIsOverlayVisible(false)
	}
	
	const handleUpdateTask = () => {
		setIsVisible(false)
		setIsOverlayVisible(false)
		setIsDraggable(true)
		dispatch(UPDATE_TASK({id, content: task}))
	}

	const handleDeleteTask = () => dispatch(DELETE_TASK(id))
	// Move card

	const handleDragStart = (e, id) => {
		setDraggedItem(id)
		e.target.classList.add('drag')
	}

	const handleDragEnd = (e) => e.target.classList.remove('drag')

	const handleActions = () => {
		setIsOverlayVisible(!isOverlayVisible)
		setIsDraggable(false)
	}

	const buttons = [
		{
			id: uuidv4(),
			title: 'Delete task',
			alt: 'Delete task',
			img: 'images/delete.svg',
			func: handleDeleteTask
		},
		{
			id: uuidv4(),
			title: 'Edit task',
			alt: 'Edit task',
			img: 'images/edit.svg',
			func: handleEditTask
		},
		{
			id: uuidv4(),
			title: 'Close menu',
			alt: 'Close menu',
			img: 'images/close.svg',
			func: handleActions
		}
	]

	return(
		<article className="card" key={id} draggable={isDraggable} onDragStart={ e => handleDragStart(e, id)} onDragEnd={ e => handleDragEnd(e)} >
			{
				!isVisible && 
				<div className='card__info'>
					<p className='card__content'>{ content }</p>
					<ButtonElement title="Open actions" alt="Actions taks" img="images/dots.svg" func={ handleActions }/>
				</div>
			}

			{ 
				isVisible && 
				<div className='card__info'>
					<textarea className='card__textarea' type="text" 
						value={task} 
						onChange={ e => setTask(e.target.value)} 
						onKeyUp={(e) => handleSetHeight(e)}
					/>
					<ButtonElement title="Confirm task" alt="Update task" img="images/check.svg" func={ handleUpdateTask  }/>
				</div>
			}
			
			{
				isOverlayVisible && 
				<div className='overlay overlay--centered'>
					{ buttons.map( button => <ButtonElement key={button.id} {...button} />) }
				</div>
			}
		</article>
	)
}
