import Card from './Card.jsx'
import {randomProductApi} from '../Api/apiUrl'
import useFetcher from '../Hooks/useFetcher'

const RandomProduct = () => {

	const url = randomProductApi();
	const {data, loading, error } = useFetcher(url);

	return (
		<section className="bg-gradient-to-r from-slate-400 to-blue-300 py-8 mt-8">
			<div className="mx-auto w-[90%]">
				<h3 className="text-2xl text-center text-blue-700 font-bold mb-8">Products You May Like</h3>

				<div className="flex justify-center">
					{data?.random && data?.random.map((item => (
						<Card
							cardData={item}
						/>
					)))}
				</div>
			</div>
		</section>
	)
}

export default RandomProduct;

