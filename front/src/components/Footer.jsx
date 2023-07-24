import lightLogo from "@/assets/light-logo.svg"
import IBMLogo from "@/assets/ibm-logo.svg"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex items-center justify-between px-5 bg-[#262626] absolute bottom-0 w-full py-10">
            <Link href="/">
                <Image src={lightLogo} alt="" />
            </Link>
            <a href="https://www.ibm.com/br-pt" target="_blank">
                <Image src={IBMLogo} alt="" />
            </a>
        </footer>
    )
}