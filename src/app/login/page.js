"use client"
import { useRouter } from 'next/navigation'

import Link from "next/link"


const page = () => {
    const router = useRouter()
    const navigate = (name) => {
        router.push(name)
    }
    return (
        <div>
            <h1 className='heading'>Login Page</h1>
            <Link href="/">Go to Home Page</Link>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/login/loginStudent")}> Go to Student Login Page</button>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/login/loginCollage")}> Go to Collage Login Page</button>
        </div>
    )
}

export default page
