import Delay from './LoadDelay'

export default function Main({ children, className }) {
  return (
    <main className={`px-4 my-16 md:px-36 md:my-20 ${className}`}>
      <Delay>{children}</Delay>
    </main>
  )
}
