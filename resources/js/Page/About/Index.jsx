import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const About = () => {
	return (
		<section className="bg-white">
			<h3 className="text-violet-300 text-[15rem] text-center">Thank U</h3>

			<div className="w-[50rem] bg-white mx-auto">
				<h2 className="text-center text-xl text-blue-800">
				<FontAwesomeIcon icon={faCode} className="text-violet-500 mx-4" />
				We are Laracamp's Junior Team
				<FontAwesomeIcon icon={faCode} className="text-violet-500 mx-4" />
				</h2>
			</div>
		</section>
	)
}

export default About;