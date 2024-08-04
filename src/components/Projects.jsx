import LineGradient from '../components/LineGradiant'
import { motion } from 'framer-motion'


const Project = ({title}) =>
{
	const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
	bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
	

    return (
			<motion.div
				variants={projectVariant}
				className='relative'
			>
				<div className={overlayStyles}>
					<p className='text-2xl font-playfair'>{title}</p>
					<p className='font-playfair mt-7 '>
						Уникальные пользовательские интрефейсы
					</p>
				</div>
				<img src={`../assets/${projectTitle}.png`} alt={projectTitle} className='h-full w-full'/>
			</motion.div>
		)
}

const container =  {
	hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    },
};
const projectVariant = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1}
}
const Projects = () => {
	return (
		<section id='портфолио' className='pt-10 pb-24 '>
			{/* заголовок */}
			<motion.div
				className='md:w-2/4 mx-auto text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div className='mt-20'>
					<p className='font-playfair font-semibold text-4xl'>
						МОИ <span className='text-red'>ПРОЕКТЫ</span>
					</p>
					<div className='flex justify-center mt-5'>
						<LineGradient width='w-[810px]' />
					</div>
				</div>
				<p className='mt-10 mb-10 font-playfair'>
					Здесь вы можете увидеть часть моих выполненных проектов
				</p>
			</motion.div>

			{/* проекты сами */}
			<div className='flex justify-center'>
				<motion.div
					className='sm:grid sm:grid-cols-3'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					variants={container}
				>
					{/* 1я колонна */}
					<div
						className='flex justify-center text-center items-center p-10 bg-red
              max-w-[550px] max-h-[400px] text-2xl font-playfair font-semibold'
					>
						НЕВЕРОЯТНЫЕ ПОЛЬЗОВАТЕЛЬСКИЕ ИНТЕРФЕЙСЫ
					</div>
					<Project title='Проект 1' />
					<Project title='Проект 2' />
					{/* 2я колонна */}
					<Project title='Проект 3' />
					<Project title='Проект 4' />
					{/* 3я колонна */}
					<Project title='Проект 5' />
					<Project title='Проект 6' />
					<Project title='Проект 7' />
					{/* спанчик */}
					<div
						className='flex justify-center text-center items-center p-10 bg-blue
               text-2xl font-playfair font-semibold'
					>
						ДОВОЛЬНЫЕ ПОЛЬЗОВАТЕЛИ
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Projects
