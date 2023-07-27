import lightLogo from '@/assets/light-logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import Delay from './LoadDelay'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-5 bg-[#262626] w-full py-10 self-end">
      <Delay>
        <Link href="/">
          <Image src={lightLogo} alt="" priority />
        </Link>
      </Delay>
    </footer>
  )
}
