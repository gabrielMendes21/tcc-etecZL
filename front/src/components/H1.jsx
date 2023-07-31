export default function H1({ title, className }) {
  return (
    <div className={className}>
      <h1 className={`text-xl py-7 ${className}`}>{title}</h1>
      <hr className="border-[#C6C6C6]" />
    </div>
  )
}
