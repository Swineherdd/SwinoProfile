import LineGradient from '../components/LineGradiant'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

const Contacts = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm()
	const onSubmit = async e => {
		const isValid = await trigger()
		if (!isValid) {
			e.preventDefault()
		}
	}
	return (
		<section id='контакты' className='py-49 pb-[350px]'>
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
						МОИ <span className='text-yellow'>КОНТАКТЫ</span>
					</p>
					<div className='flex justify-center mt-5'>
						<LineGradient width='w-[810px]' />
					</div>
				</div>
				<p className='mt-10 mb-10 font-playfair'>
					Здесь вы можете отпарвить письмо и связаться со мной
				</p>
			</motion.div>
			{/* ФОРМА ОТПРАВКИ И КАРТИНКА */}
			<div className='md:flex md: justify-between gap-16 mt-5'>
				<motion.div
					className='basis-1/2 flex justify-center'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<img
						src='../assets/popka.jpg'
						alt='contact'
						className='w-[650px] h-[320px] hover:filter hover:saturate-200 transition duration-500 '
					/>
				</motion.div>

				<motion.div
					className='basis-1/2 mt-10 md:mt-0'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<form
						action='https://formsubmit.co/verstka.f@mail.ru'
						target='_blank'
						onSubmit={onSubmit}
						method='POST'
					>
						<input
							className='w-full bg-blue font-semibold placeholder-opaque-black p-3'
							type='text'
							placeholder='ИМЯ'
							{...register('name', {
								required: true,
								maxLength: 100,
							})}
						/>
						{errors.name && (
							<p className='text-red mt-1'>
								{errors.name.type === 'required' &&
									'Это поле является обязательным'}
								{errors.name.type === 'maxLength' &&
									'Максимальная длина 100 символов'}
							</p>
						)}

						<input
							className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
							type='text'
							placeholder='E-MAIL'
							{...register('email', {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						{errors.email && (
							<p className='text-red mt-1'>
								{errors.email.type === 'required' &&
									'Это поле является обязательным'}
								{errors.email.type === 'pattern' &&
									'Неккоректный e-mail адресс'}
							</p>
						)}
						<textarea
							className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
							type='text'
							placeholder='СООБЩЕНИЕ'
							rows='4'
							cols='50'
							{...register('message', {
								required: true,
								maxLength: 2000,
							})}
						/>
						{errors.message && (
							<p className='text-red mt-1'>
								{errors.message.type === 'required' &&
									'Это поле является обязательным'}
								{errors.message.type === 'maxLength' &&
									'Максимальная длина 2000 символов'}
							</p>
						)}

						<button
							type='submit'
							className='p-5 bg-yellow text-black font-black mt-5 hover:bg-red hover:text-white transition duration-500 font-playfair'
						>
							ОТПРАВИТЬ
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	)
}

export default Contacts
