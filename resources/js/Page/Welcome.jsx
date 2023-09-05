import {Link,Outlet} from 'react-router-dom'
import {useEffect} from 'react'
import axiosClient from '../Libs/axios-client'

const Welcome = () => {

    useEffect(() => {
        axiosClient.get("/dd")
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[])


    return (
        <>
            <div>Welcome</div>
            <Link to="/dd"> ddd</Link>
            <Link to="/home"> home</Link>

            <Outlet />
        </> 
    )
}


export default Welcome;