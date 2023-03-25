import { BoardsSection, HeaderSection, MenuSection  } from './01-sections'

export const App = () => {
	return(
		<div className='container'>
			<HeaderSection />
			<MenuSection />
			<BoardsSection />
		</div>
	)
}
