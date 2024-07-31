import useAuth from "../../hooks/useAuth"
import { Search, Settings } from "lucide-react"

export const Header = () => {
  const { user } = useAuth()
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-primary flex items-center justify-between px-4 h-[4rem]">
      <h1>LOGO</h1>
      <div className="flex items-center gap-2">
        <input placeholder="Pesquisar..." type="text" className="bg-secondary/45 rounded-md text-white px-4 py-2 outline-none w-64 placeholder:text-white" />
        <button className="p-2 bg-slate-600 rounded-md hover:bg-slate-700 transition-all duration-200 hover:text-zinc-800">
          <Search className="text-zinc-100 h-6 w-6" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-white font-bold text-xl">{`${user?.surname !== null ? user?.name + ' ' + user?.surname : user?.name}`}</span>
        <button className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-200 hover:text-zinc-800">
          <Settings className="text-white h-6 w-6" />
        </button>
      </div>
    </header >
  )
}