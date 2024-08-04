

const SocialMediaIcons = ()=>
{
    return (
			<div className='flex justify-center md:justify-start gap-7'>
				<a
					className='hover:opacity-50 transition duration-500'
					href='https://steamcommunity.com/id/itachicon/'
					target='_blank'
					rel='noreferrer'
				>
					<img src='/assets/linkedin.png' alt='steam' />
				</a>
				<a
					className='hover:opacity-50 transition duration-500'
					href='https://vk.com/trenchw'
					target='_blank'
					rel='noreferrer'
				>
					<img src='/assets/facebook.png' alt='vk' />
				</a>
				<a
					className='hover:opacity-50 transition duration-500'
					href='https://discordapp.com/channels/1099034921068146710'
					target='_blank'
					rel='noreferrer'
				>
					<img src='/assets/instagram.png' alt='discord' />
				</a>
				<a
					className='hover:opacity-50 transition duration-500'
					href='https://t.me/VerstkaF'
					target='_blank'
					rel='noreferrer'
				>
					<img src='/assets/twitter.png' alt='telegramm' />
				</a>
			</div>
		)
}
export default SocialMediaIcons;