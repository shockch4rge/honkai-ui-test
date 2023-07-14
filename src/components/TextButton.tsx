import { PropsWithChildren } from "react"

export const TextButton: React.FC<PropsWithChildren> = ({ children }) => {
    return <button className="px-6 py-2 text-lg bg-gray-200 hover:bg-white focus:bg-gray-300 border-2 border-gray-200 focus:border-gray-300 ring-4 ring-offset-2 focus:ring-offset-gray-300 ring-gray-100 ring-opacity-0 hover:ring-opacity-100 rounded-full hover:shadow-lg shadow-md shadow-white transition">
        {children}
    </button>
}