import Delay from './LoadDelay'

export default function Main({ children }) {
  return (
    <main className="px-4 my-16 md:px-36 md:my-32">
      <Delay>{children}</Delay>
    </main>
  )
}
