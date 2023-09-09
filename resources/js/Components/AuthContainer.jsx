import AuthSlide from './Auth/Index'

const AuthContainer = ({isShow, setIsShow}) => {

	const AuthContainer = {
		transform : isShow ? "translateX(0)" : "translateX(500%)",
		transition : "transform 200ms",
	}


	return (
		<div 
		className="fixed right-0 botton-0 left-0 top-0 bg-slate-500/50 h-[100vh] backdrop-blur-sm translateX-0"
		style={AuthContainer}
		>
			<div className="bg-white h-[100vh] w-[22rem] absolute right-0">

			<div>
				<button
					className="hover:text-red-800 text-red-500 absolute right-4 top-4"
					onClick={() => setIsShow(null)}
				>
					Close
				</button>
			</div>
				<div className="h-full flex items-center justify-center">
					<AuthSlide 
						show={isShow}
						setIsShow={setIsShow} 
					/>
				</div>
			</div>

		</div>
	)
}

export default AuthContainer;