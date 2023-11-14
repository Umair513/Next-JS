import Link from "next/link";

export default function StudentList() {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentList/Umair">Umair</Link>
                </li>
                <li>
                    <Link href="/studentList/Ahmed">Ahmed</Link>
                </li>
                <li>
                    <Link href="/studentList/Soomro">Soomro</Link>
                </li>
                <li>
                    <Link href="/studentList/Laptop">Laptop</Link>
                </li>
                <li>
                    <Link href="/studentList/Fan">Fan</Link>
                </li>
                <li>
                    <Link href="/studentList/Keyboard">Keyboard</Link>
                </li>
            </ul>
        </div>
    )
}