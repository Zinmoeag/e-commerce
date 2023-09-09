import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
        <>
            <div className="h-[100vh] bg-slate-100 flex items-center justify-center">
                <div className='bg-slate-100 shadow-lg w-fit h-[20rem] flex items-center justify-center'>

                    <img 
                    src="https://i.pinimg.com/564x/9d/70/b8/9d70b860a93cc01702926970874cdcf2.jpg"
                     alt=""
                     className="h-full" 
                     />

                     <div className="w-[25rem] text-center px-5">
                        <h3 className="font-bold text-xl">This is Tony</h3>
                        <p>He want you go back to home page cuz Tony can't find the page u want.</p>
                        <Link to="/pos" className="text-blue-600 mt-6">Go Back</Link>
                     </div>


                </div>


            </div> 
        </>
    )
}


export default NotFound;