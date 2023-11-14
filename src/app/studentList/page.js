import Link from "next/link";

export default function StudentList() {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentList/1">Umair</Link>
                </li>
                <li>
                    <Link href="/studentList/2">Ahmed</Link>
                </li>
                <li>
                    <Link href="/studentList/3">Soomro</Link>
                </li>
                <li>
                    <Link href="/studentList/4">Laptop</Link>
                </li>
                <li>
                    <Link href="/studentList/5">Fan</Link>
                </li>
                <li>
                    <Link href="/studentList/6">Keyboard</Link>
                </li>
            </ul>
        </div>
    )
}