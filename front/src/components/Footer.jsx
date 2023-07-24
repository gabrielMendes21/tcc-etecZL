import lightLogo from "@/assets/light-logo.svg"
import IBMLogo from "@/assets/ibm-logo.svg"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="flex items-center justify-between px-5 bg-[#262626] absolute bottom-0 w-full py-10">
            <Image src={lightLogo} alt="" />
            <Image src={IBMLogo} alt="" />
        </footer>
    )
}