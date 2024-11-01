import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";



const Link = ({page, selectedPage, setSelectedPage}) =>
{
    const lowerCasePage = page.toLowerCase();
    return (
			<AnchorLink
				className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''}
                 hover:text-yellow transition duration-500`}
				href={`#${lowerCasePage}`}
				onClick={() => setSelectedPage(lowerCasePage)}
			>
				{page}
			</AnchorLink>
		)
}
const Navbar  = ({isTopOfPage, selectedPage, setSelectedPage}) =>
{
    const [isMenuToggled, setIsMenuToggled] = useState(false);
     const isDesktop = useMediaQuery('(min-width: 768px)')
	const navbarBackground = isTopOfPage ? "" : "bg-siniy z-1000";
    
    return (
			<nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
				<div className='flex items-center justify-between mx-auto w-5/6'>
					<h4 className='font-playfair text-3xl font-bold'>SWIN</h4>
					{/* NAV-DESKT */}
					{isDesktop ? (
						<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
							<Link
								page='Главная'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page='Навыки'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page='Портфолио'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>

							<Link
								page='Рекомендации'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page='Контакты'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</div>
					) : (
						<button
							className='rounded-full bg-red p-2'
							onClick={() => setIsMenuToggled(!isMenuToggled)}
						>
							<img src='../assets/menu-icon.svg' alt='menu' />
						</button>
					)}

					{/* popup mobilr */}
					{!isDesktop && isMenuToggled && (
						<div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
							{/* закрывающаяся иконка */}
							<div className='flex justify-end p-12'>
								<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
									<img src='../assets/menu-icon.svg' alt='close' />
								</button>
							</div>

							{/* итемы меню */}
							<div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
								<Link
									page='Главная'
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
								<Link
									page='Навыки'
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
								<Link
									page='Портфолио'
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>

								<Link
									page='Рекомендации'
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
								<Link
									page='Контакты'
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
							</div>
						</div>
					)}
				</div>
			</nav>
		)
}

export default Navbar;