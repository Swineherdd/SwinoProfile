import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({selectedPage, setSelectedPage}) =>
{
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-49%] before:top-[-50%]`
    return (
			<div className='flex flex-col gap-6 fixed top-[60%] right-7'>
				<AnchorLink
					className={`${
						selectedPage === 'главная' ? selectedStyles : 'bg-dark-grey'
					}
                 w-3 h-3 rounded-full`}
					href='#главная'
					onClick={() => setSelectedPage('главная')}
				/>
				<AnchorLink
					className={`${
						selectedPage === 'навыки' ? selectedStyles : 'bg-dark-grey'
					}
                 w-3 h-3 rounded-full`}
					href='#навыки'
					onClick={() => setSelectedPage('навыки')}
				/>
				<AnchorLink
					className={`${
						selectedPage === 'портфолио' ? selectedStyles : 'bg-dark-grey'
					}
                 w-3 h-3 rounded-full`}
					href='#портфолио'
					onClick={() => setSelectedPage('портфолио')}
				/>
				<AnchorLink
					className={`${
						selectedPage === 'рекомендации' ? selectedStyles : 'bg-dark-grey'
					}
                 w-3 h-3 rounded-full`}
					href='#рекомендации'
					onClick={() => setSelectedPage('рекомендации')}
				/>
				<AnchorLink
					className={`${
						selectedPage === 'контакты' ? selectedStyles : 'bg-dark-grey'
					}
                 w-3 h-3 rounded-full`}
					href='#контакты'
					onClick={() => setSelectedPage('контакты')}
				/>
			</div>
		)
		
}


export default DotGroup;