"use client"
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    const navigate = (name) => {
        router.push(name)
    }
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={() => navigate("/")}>Go to HomePage</button>
        </div>
    )
}

export default page
