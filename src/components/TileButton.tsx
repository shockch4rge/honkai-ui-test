import { PropsWithChildren } from "react"

export const TileButton: React.FC<PropsWithChildren> = ({ children }) => {
    return <button className="w-32 h-36 bg-gradient-to-b from-blue-950 to-blue-800 text-primary rounded-tr-3xl ring-2 ring-opacity-0 hover:ring-opacity-100 ring-white shadow-inner shadow-white/5 hover:shadow-white/100 transition">
        {children}
    </button>
}