import {useState} from 'react'
import {Link} from 'react-router-dom'
import {RouterProvider} from "react-router-dom";
import router from './router'

export default function Main() {

    const [count , setCount] = useState(0)

    const heading = "Laravel 9 Vite  with React JS";
    return (    

        <>
            <RouterProvider
                router = {router}
            />
        </>

    );

}
