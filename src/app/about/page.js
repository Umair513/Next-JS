"use client"
import Link from 'next/link'
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
            <br></br>
            <br></br>
            <Link href="about/aboutCollage">Link to About Collage Page</Link>
            <br></br>
            <br></br>
            <Link href="about/aboutStudent">Link to About Student Page</Link>
        </div>
    )
}

export default page
