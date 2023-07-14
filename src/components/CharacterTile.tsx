import { ComponentProps } from "react";
import { clsx } from "clsx";
import { CaretRight } from "@phosphor-icons/react";

type Props = Omit<ComponentProps<"input">, "type"> & {
    img?: string;
    imgClass?: string;
}


export const CharacterTile: React.FC<Props> = ({ children, id, img, value, imgClass, ...props }) => {
    return <div className="w-96 h-48 relative [&:has(input[type='radio']:checked)]:translate-x-6 transition-transform">
        <input id={id} type="radio" value={value} className="peer w-full h-full bg-black/50 hover:bg-transparent checked:bg-transparent from-black to-white border-4 border-transparent hover:border-primary/100 checked:border-primary/100 checked:shadow-2xl cursor-pointer transition" {...props} />
        <label htmlFor={id} className="text-3xl text-white text-end absolute bottom-4 right-6">
            {children}
        </label>
        <span className="w-full h-full absolute inset-0 bg-gradient-to-br from-black/5 via-black/20 to-black/60 -z-10" />
        <div className="w-full h-full absolute inset-0 overflow-clip -z-20">
            {img && <img src={img} draggable={false} className={clsx("w-full select-none absolute", imgClass)} />}
        </div> 
        <CaretRight weight="bold" className="absolute inset-y-[4rem] -right-8 text-5xl text-primary opacity-0 peer-checked:opacity-100 peer-checked:translate-x-8 transition" />
    </div>
}