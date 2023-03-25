import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DELETE_BOARD } from "../../redux/slices/boardsSlice"
import { DELETE_ALL_TASK, MOVE_TASK } from '../../redux/slices/tasksSlice'
import { UPDATE_BOARD } from '../../redux/slices/boardsSlice'
import { ButtonElement } from '../03-elements/ButtonElement'


export const BoardComponent = ({id, board, children, draggedItem}) => {
	const dispatch = useDispatch()
	const [newBoard, setNewBoard] = useState(board)
	const [isVisible, setIsVisible] = useState(false)
	const [isOverlayVisible, setIsOverlayVisible] = useState(false)

	const handleEditBoard = () => {
		setIsVisible(true)
		setIsOverlayVisible(false)
	}

	const handleUpdateBoard = () => {
		setIsVisible(false)
		setIsOverlayVisible(false)
		dispatch(UPDATE_BOARD({id,name: newBoard}))
	}

	const handleDeleteBoard = () => { 
		dispatch(DELETE_ALL_TASK(id))
		dispatch(DELETE_BOARD(id)) 
	}

	const handleActions = () => setIsOverlayVisible(!isOverlayVisible)
	// Move card

	const handleDragOver = e => e.preventDefault()

	const handleDrop = (e, board) => {
		e.preventDefault()
		dispatch(MOVE_TASK({draggedItem, board}))
	}

	const buttons = [
		{
			id: uuidv4(),
			title: 'Delete this board',
			alt: 'Delete task',
			img: 'images/delete.svg',
			func: handleDeleteBoard
		},
		{
			id: uuidv4(),
			title: 'Edit board',
			alt: 'Edit board',
			img: 'images/edit.svg',
			func: handleEditBoard
		},
		{
			id: uuidv4(),
			title: 'Close menu',
			alt: 'Close task',
			img: 'images/close.svg',
			func: handleActions
		}
	]

	return(
		<div className="board" onDragOver={ handleDragOver } onDrop={ e => handleDrop(e, id)}>
			{
				!isVisible &&
				<div className='board-actions'>
					<h3 className='board-actions__title'>{board}</h3>
					<ButtonElement title="Open actions" alt="Actions board" img="images/dots.svg" func={ handleActions }/>
				</div>
			}

			{
				isVisible &&
				<div className='card__info'>
					<input className='card__textarea' type="text" value={newBoard} onChange={ e => setNewBoard(e.target.value)} />
					<ButtonElement title="Confirm board" alt="Update board" img="images/check.svg" func={ handleUpdateBoard }/>
				</div>
			}

			<div className='board-list'>{children}</div>
			
			{
				
				isOverlayVisible && 
				<div className='overlay overlay--centered'>
					{ buttons.map( button => <ButtonElement key={button.id} {...button} />) }
				</div>
			}
		</div>
	)
}