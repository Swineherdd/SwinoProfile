import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar"
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradiant from "./components/LineGradiant"
import MySkills from "./components/MySkills"
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts';
import Footer from "./components/Footer"

function App() {
	const [selectedPage, setSelectedPage] = useState('главная')
	const [isTopOfPage, setIsTopOfPage] = useState(true)
	const isDesktop = useMediaQuery('(min-width: 1060px)')

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true)
				setSelectedPage('главная')
			}
			if (window.scrollY !== 0) setIsTopOfPage(false)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<div className='app bg-deep-blue'>
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<div className='w-5/6 mx-auto md:h-full'>
				{isDesktop && (
					<DotGroup
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				)}
				<motion.div
					margin='0 0 -200px 0'
					amount='all'
					onViewportEnter={() => setSelectedPage('глaвная')}
				>
					<Landing setSelectedPage={setSelectedPage} />
				</motion.div>
			</div>
			<LineGradiant />
			<div className='w-5/6 mx-auto md:h-full'>
				<motion.div
					margin='0 0 -200px 0'
					amount='all'
					onViewportEnter={() => setSelectedPage('навыки')}
				>
					<MySkills />
				</motion.div>
			</div>
			<LineGradiant />
			<div className='w-5/6 mx-auto'>
				<motion.div
					margin='0 0 -200px 0'
					amount='all'
					onViewportEnter={() => setSelectedPage('портфолио')}
				>
					<Projects />
				</motion.div>
			</div>
			<LineGradiant />
			<div className='w-5/6 mx-auto'>
				<motion.div
					margin='0 0 -200px 0'
					amount='all'
					onViewportEnter={() => setSelectedPage('рекомендации')}
				>
					<Testimonials />
				</motion.div>
			</div>
			<LineGradiant />
			<div className='w-5/6 mx-auto'>
				<motion.div
					margin='0 0 -200px 0'
					amount='all'
					onViewportEnter={() => setSelectedPage('контакты')}
				>
					<Contacts />
				</motion.div>
			</div>
			<Footer/>
		</div>
	)
}

export default App;
