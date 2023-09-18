import 'animate.css';
import "../../css/slideInAnimation.css";

const SlideInAnimation = ({ itemNo, children}) => {

	const delay = itemNo * 0.3;

	const style = {
		animationDelay: `${delay}s`,
		transform : "translateY(-30%)" 
	}

	return (
		<section 
			id="slideInAnimation"
			style={style}
			className='animate__animated animate__fadeInUp'
		>
			{children}
		</section>
	)
}

export default SlideInAnimation


