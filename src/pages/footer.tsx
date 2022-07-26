import Link from "next/link"
import Copyright from "@/components/atoms/Copyright";

export default function footer() {
    return (
        <div>
            <footer className="bottom-0 w-full">
                <div className="text-center mt-14">
                    <div>
                        <ul className="flex justify-center mb-5">
                            <li className="first:pl-0">
                                <Link href="#">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li className="pl-3">
                                <Link href="#">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li className="pl-3">
                                <Link href="#">
                                    <a>News</a>
                                </Link>
                            </li>
                            <li className="pl-3">
                                <Link href="#">
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                        <Copyright/>
                </div>
            </footer>
        </div>
    )
}
