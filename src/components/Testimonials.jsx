import { motion } from "framer-motion";
import LineGradient from '../components/LineGradiant'


const Testimonials = () =>
{
    return (
			<section id='рекомендации' className='pt-32 pb-[210px]'>
				{/* заголивок */}
				<motion.div
					className='md:w-1/3 text-center md:text-left'
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
						МОИ <span className='text-red'>РЕКОМЕНДАЦИИ</span>
					</p>
					<LineGradient width='max-w-[383px]' />
					<p className='mt-10 font-playfair'>
						Здесь вы можете найти рекомендации от довольных клиентов
					</p>
				</motion.div>
				{/* РЕКОМЕНДАЦИИ */}
				<div className='md:flex md:justify-between gap-8'>
					<motion.div
						className='mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[240px] before:left-1/2 before:content-person1'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.6 }}
						variants={{
							hidden: { opacity: 0, scale: 0.8 },
							visible: { opacity: 1, scale: 1 },
						}}
					>
						<p className='font-playfair text-6xl'>“</p>
						<p className='text-center text-xl font-playfair font-black'>
							ОЧЕНЬ ПОМОГ ВСЕМ РЕКОМЕНДУЮ ДАННОГО СПЕЦИАЛИСТА
						</p>
					</motion.div>

					<motion.div
						className='mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						variants={{
							hidden: { opacity: 0, scale: 0.8 },
							visible: { opacity: 1, scale: 1 },
						}}
					>
						<p className='font-playfair text-6xl font-black'>“</p>
						<p className='text-center text-xl'>КАЧЕСТВЕННЫЙ КОНТЕН( ͡° ͜ʖ ͡°)</p>
					</motion.div>

					<motion.div
						className='mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-50px] before:-ml-[110px] before:left-1/2 before:content-person3 before:scale-150'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						variants={{
							hidden: { opacity: 0, scale: 0.8 },
							visible: { opacity: 1, scale: 1 },
						}}
					>
						<p className='font-playfair text-6xl'>“</p>
						<p className='text-center text-xl font-playfair font-black'>
							РАБОТА ПРОДОЛЖАЕТСЯ! РЕКОМЕНДУЮ!
						</p>
					</motion.div>
				</div>
			</section>
		)
}


export default Testimonials;