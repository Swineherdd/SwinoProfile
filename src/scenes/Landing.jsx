import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons"

const Landing  = ({setSelectedPage}) =>
{
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
			<section
				id='главная'
				className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
			>
				{/* профиль */}
				<div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
					{isAboveMediumScreens ? (
						<div
							className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                          before:rounded-t-[400px] before:w-full before:max-w-[600px] before:h-full before:border-2 before:border-white
                          before:z-[-1]'
						>
							<img
								alt='profile'
								src='assets/profile-image.jpg'
								className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]'
							/>
						</div>
					) : (
						<img
							alt='profile'
							src='assets/profile-image.jpg'
							className='rounded-t-[400px] max-w-[400px] w-full z-10 hover:filter hover:saturate-200 transition duration-500'
						/>
					)}
				</div>
				{/* основная секция */}
				<div className='z-30 basis-2/5 mt-12 md:mt-32'>
					{/* анмиации вызда */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<p className='text-6xl font-playfair z-10 text-center md:text-start'>
							Swine {''}
							<span
								className='xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
						before:absolute before:-left-[40px] before:-top-[110px] before:z-[-1] h-[10px] '
							>
								herd
							</span>
						</p>

						<p className='mt-[100px] text-lg text-center md:text-start font-playfair '>
							Свинопасы свинопасят свинопасов котрые свинопасят свиней
						</p>
					</motion.div>
					{/* вызов действий */}
					<motion.div
						className='flex mt-5 justify-center md:justify-start'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<AnchorLink
							className='bg-gradient-rainblue text-deep-blue rounded-l-sm py-3 px-7 font-semibold font-playfair
							hover:bg-blue hover:text-white transition duration-500'
							onClick={() => setSelectedPage('контакты')}
							href='#контакты'
						>
							Связь со мной
						</AnchorLink>
						<AnchorLink
							className='rounded-r-sm bg-gradient-popka-2 py-0.5 pr-0.5 '
							onClick={() => setSelectedPage('контакты')}
							href='#контакты'
						>
							<div
								className='text-white bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center
							 font-playfair px-8'
							>
								Обсудим сделку
							</div>
						</AnchorLink>
					</motion.div>

					<motion.div
						className='flex mt-5 justify-center md:justify-start'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<SocialMediaIcons />
					</motion.div>
				</div>
			</section>
		)
}
export default Landing;