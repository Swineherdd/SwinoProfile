import LineGradient from "../components/LineGradiant";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () =>
{
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")


    return (
			<section id='навыки' className='pt-10 pb-24 '>
				{/* заголовок и картинки */}
				<div className='md:flex md:justify-between md:gap-16 mt-32'>
					<motion.div
						className='md:w-1/3'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
							variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<p className='font-playfair font-semibold text-4xl mb-5'>
							МОИ <span className='text-red'>НАВЫКИ</span>
						</p>
						<LineGradient width='max-w-[246px]' />
						<p className='mt-10 mb-7 font-playfair'>
							Специалист в Front-end разработке. Опыт работы с разными CMS.
							Работа с ReactJS. Знания JS. Опыт работы с языком программирования
							C#. Опыт работы с ASP.NET Core. Знания MySQL. Опыт разработки
							приложений на платформе WinForms.Работа с фреймворками
						</p>
					</motion.div>
					{/* картинка скила */}
					{isAboveMediumScreens ? (
						<div
							className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                           before:w-full before:h-full before:border-2 before:border-white
                          before:z-[-1]'
						>
							<img
								alt='profile'
								src='assets/skills-image.png'
								className='z-10 hover:filter hover:saturate-200 transition duration-500'
							/>
						</div>
					) : (
						<img
							alt='profile'
							src='assets/skills-image.png'
							className='z-10 hover:filter hover:saturate-200 transition duration-500'
						/>
					)}
				</div>

				{/* навыки */}
				<div className='md:flex md:justify-between mt-16 gap-32'>
					{/* опыт работы */}
					<motion.div
						className='md:w-1/3 mt-10'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<div className='relative h-32 '>
							<div className='z-10'>
								<p className='font-playfair font-semibold text-5xl'>01</p>
								<p className='font-playfair font-semibold text-4xl mt-3'>
									React
								</p>
							</div>
							<div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-[60px] top-0 z-[-1]'>
								<img
									className=' block m-auto'
									alt='react'
									src='./assets/re.png'
								/>
							</div>
							<p className='mt-8 font-playfair text-2xl max-[500px]:hidden'>
								Работаю с React уже полгода и имею большие знания в этой облвсти
							</p>
						</div>
					</motion.div>
					<motion.div
						className='md:w-1/3 mt-10'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.7, delay: 0.3 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<div className='relative h-32 '>
							<div className='z-10'>
								<p className='font-playfair font-semibold text-5xl'>02</p>
								<p className='font-playfair font-semibold text-4xl mt-3'>
									TypeScript
								</p>
							</div>
							<div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-[60px] top-0 z-[-1]'>
								<img
									className=' block m-auto'
									alt='react'
									src='./assets/ts.png'
								/>
							</div>
							<p className='mt-8 font-playfair text-2xl max-[500px]:hidden'>
								Работаю с TypeScript вместе со связкой ReactJS
							</p>
						</div>
					</motion.div>

					<motion.div
						className='md:w-1/3 mt-10'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.7, delay: 0.4 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<div className='relative h-32 '>
							<div className='z-10'>
								<p className='font-playfair font-semibold text-5xl'>03</p>
								<p className='font-playfair font-semibold text-4xl mt-3'>
									JavaScript
								</p>
							</div>
							<div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-[60px] top-0 z-[-1]'>
								<img
									className=' block m-auto'
									alt='react'
									src='./assets/js.png'
								/>
							</div>
							<p className='mt-8 font-playfair text-2xl max-[500px]:hidden'>
								Работаю с JavaScript долгие годы
							</p>
						</div>
					</motion.div>
				</div>
			</section>
		)
}

export default MySkills;