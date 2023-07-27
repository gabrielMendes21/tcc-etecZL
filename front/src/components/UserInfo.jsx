export default function UserInfo({ name, status }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl py-7">Olá, {name}!</h1>
        <span className="text-xs">{status}</span>
      </div>

      <hr className="border-[#C6C6C6]" />
    </>
  )
}
