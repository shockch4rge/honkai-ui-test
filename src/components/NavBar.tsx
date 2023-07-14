import { ComponentProps, useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"
import { clsx } from "clsx";

export const NavBar: React.FC<ComponentProps<"nav">> = () => {
    const { scrollYProgress } = useScroll();
    const [shouldExpandNavBar, setShouldExpandNavBar] = useState(false);

    useEffect(() => {
        scrollYProgress.on("change", value => {
            setShouldExpandNavBar(value * 100 > 63);
        })
    }, [scrollYProgress])

    return <motion.nav 
        className={"w-auto px-48 py-4 flex justify-between items-center fixed top-0 bg-gray-700/10 backdrop-blur-lg backdrop-brightness-90 border-2 border-white border-t-transparent border-opacity-10 z-50 inset-x-8"}
        animate={shouldExpandNavBar ? { 
            left: "0px", 
            right: "0px", 
            borderLeft: "none",
            borderRight: "none",
            transition: { ease: "circOut", duration: 0.4 } 
        }: undefined} 
    >
        <img src="images/hsr/logo.webp" className={clsx("h-10 ml-4 scale-[160%]", shouldExpandNavBar ? "opacity-100" : "opacity-0", "transition-opacity")} /> 
        <div className="flex items-center space-x-8">
            <NavLink>Download</NavLink>
            <NavLink>Events</NavLink>
            <NavLink>About</NavLink>
        </div>
    </motion.nav>
}

export const NavLink: React.FC<ComponentProps<"a">> = ({ children }) => {
    const spanMotion = {
        rest: {
            y: 100,
            transition: {
                duration: 0.2,
            }
        },
        hover: {
            y: 0,
            transition: {
                duration: 0.2,
                ease: "circOut",
            }
        }
    }

    return <motion.a initial="rest" whileHover="hover" href="https://youtube.com" className="py-2 px-8 relative text-primary hover:text-slate-950 text-xl ring-2 ring-primary ring-opacity-0 hover:ring-opacity-100 transition overflow-hidden">
        {children}
        <motion.span variants={spanMotion} className="w-full h-full bg-primary absolute inset-0 -z-50" />
    </motion.a>
}