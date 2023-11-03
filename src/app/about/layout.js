import Link from "next/link"
import "./about.css"

const layout = ({ children }) => {
    return (
        <div>
            <ul className="about-menu">
                <li><h4>About Navbar</h4></li>
                <li><Link href="/about">About Main</Link></li>
                <li><Link href="/about/aboutStudent">About Student</Link></li>
                <li><Link href="/about/aboutCollage">About Teacher</Link></li>
            </ul>
            {children}
        </div>
    )
}

export default layout
