import Review from './Review.jsx'

const Footer = () => {
	return (
		<div className="bg-gradient-to-r from-slate-400 to-blue-300 px-10 py-8 relative z-40 mt-[20rem]">
			<div className="flex justify-end">
				<Review />
			</div>
		</div>
	)
}

export default Footer;