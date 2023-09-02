export default function UserInfo({ name, status }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-3xl md:my-5 font-medium py-7">
          Olá, {name}!
        </h1>
        <span className="text-xs md:text-xl">{status}</span>
      </div>

      <hr className="border-[#C6C6C6] md:my-2" />
    </>
  )
}
