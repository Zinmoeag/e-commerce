import Swiper from './Swiper'
import Brand from './Components/Brand'
import BestSeller from './Components/BestSeller'

const Home = () => {
	return (
		<div>
			<Swiper />
			{/*<Categories />*/}
			<section id="brand">
				<Brand />
			</section>

			<BestSeller />
		</div>
	)
}

export default Home;