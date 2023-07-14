import { nanoid } from "nanoid";
import { NavBar } from "./components/NavBar";
import { CharacterTile } from "./components/CharacterTile";
import { TextButton } from "./components/TextButton";
import { CaretDown, Diamond, DiamondsFour } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useState } from "react";

type Character = {
    name: string;
    imgSrc: string;
    imgClass: string;
    description: string;
    altImg1?: string;
    altImg2?: string;
}

const characters: Character[] = [
    {
        name: "Trailblazer",
        imgSrc: "/images/trailblazer/both-preview.webp",
        imgClass: "inset-y-0 -inset-x-0 scale-[1.2]",
        altImg1: "/images/trailblazer/caelus-destruction-full.webp",
        altImg2: "/images/trailblazer/stelle-destruction-full.webp",
        description: "The Trailblazer is the playable main protagonist of Honkai: Star Rail. They are awakened during the opening events of the game by Kafka and Silver Wolf, who leave them to be found by March 7th and Dan Heng on Herta Space Station during the Antimatter Legion's invasion. The player gets to choose either Stelle (female) or Caelus (male), along with their Receptacle Codename.",
    },
    {
        name: "Himeko",
        imgSrc: "/images/himeko/full.webp",
        imgClass: "-inset-y-20 -inset-x-12 scale-[3.8]",
        description: "An adventurous scientist who encountered and repaired a stranded train as a child, she now ventures across the universe with the Astral Express as its navigator. She is also an Emanator of the Trailblaze.",
    },
    {
        name: "Welt",
        imgSrc: "/images/welt/full.webp",
        imgClass: "inset-y-24 -inset-x-4 scale-[2.6]",
        description: "An animator by trade, Welt is a seasoned member of the Astral Express Crew and the former sovereign of Anti-Entropy who has saved Earth from annihilation time and time again. He inherited the name of the world, \"Welt.\"",
    },
    {
        name: "Kafka",
        imgSrc: "/images/kafka/full.webp",
        imgClass: "inset-y-32 -inset-x-12 scale-[3.6]",
        description: "She is a member of the Stellaron Hunters who is calm, collected, and beautiful. Her record on the wanted list of the Interastral Peace Corporation only lists her name and her hobby. People have always imagined her to be elegant, respectable, and in pursuit of things of beauty... even in combat.",
    },
    {
        name: "March 7th",
        imgSrc: "/images/march-7th/full.webp",
        imgClass: "inset-y-16 -inset-x-20 scale-[2.8]",
        description: "An enthusiastic girl who was saved from eternal ice by the Astral Express Crew, and has the unique ability of being able to use \"Six-Phased Ice.\" When she awoke, she knew nothing of herself or her past, and decided to name herself after the date of her rebirth, \"March 7th.\" She takes many photos using her camera in hopes of discovering a memento from her past.",
    },
    {
        name: "Serval",
        imgSrc: "/images/serval/full.webp",
        imgClass: "inset-y-0 -inset-x-24 scale-[3.4]",
        description: "She is the eldest daughter of the Landau family and a mechanic who runs the Neverwinter Workshop, a rock 'n' roll performance workshop in Belobog as a hobby.",
    },
]

const App = () => {
    const [character, setCharacter] = useState<Character>(characters[0]);

    return <>
        <NavBar />
        <section className="h-[100dvh] pt-48 px-24 container flex flex-col justify-between">
            <div className="flex items-center">
                <div>
                    <h1 className="mb-10 text-7xl text-primary">Download for free</h1>
                    <TextButton>
                        Claim 10x <img src="images/star-rail-pass.webp" className="w-7 inline"/> for free!
                    </TextButton>
                </div>
                <motion.img 
                    src="images/hsr/logo.webp" 
                    className="-mr-48 w-[70rem]" 
                    initial={{ y: -10 }} 
                    animate={{ 
                        y: 10, 
                        transition: { repeat: Infinity, repeatType: "reverse", ease: "easeInOut", duration: 5, }
                    }}
                />
            </div>
             <div className="mb-10 self-center justify-end flex flex-col -space-y-5">
                <motion.span animate={{ y: 10, transition: { repeatType: "reverse", ease: "easeInOut", repeat: Infinity, duration: 3 }}}>
                    <CaretDown className="leading-none text-primary text-4xl text-opacity-50"/>
                </motion.span>
                <motion.span animate={{ y: 10, transition: { repeatType: "reverse", ease: "easeInOut", repeat: Infinity, duration: 3 }}}>
                    <CaretDown className="leading-none text-primary text-4xl text-opacity-75"/>
                </motion.span>
            </div>
        </section>
        <section className="w-full py-20 px-48 border-t-2 border-white/10 backdrop-blur-xl backdrop-brightness-110 ">
            <div className="mb-16 flex items-center space-x-4">
                <DiamondsFour className="text-5xl text-primary"/>
                <h2 className="text-6xl text-primary">Characters</h2>
                <span className="w-full h-[0.5px] bg-primary" />
            </div>
            <div className="flex space-x-24">
                <fieldset 
                    className="px-10 flex relative flex-col items-start justify-center space-y-6" 
                    name="characters" 
                    onChange={e => {
                        return setCharacter(characters.find(c => c.name === (e.target as unknown as { value: string }).value)!);
                    }}
                >
                    {characters.map((character, i) => 
                        <CharacterTile id={nanoid()} img={character.imgSrc} imgClass={character.imgClass} name="characters" defaultChecked={i === 0} value={character.name}>
                            {character.name}
                        </CharacterTile>
                    )}
                    <div className="-ml-8 -inset-y-6 w-[0.5px] h-full flex absolute bg-primary/40" />
                </fieldset>
                <div>
                    <div className="relative">
                        {(character.altImg1 
                            ? <>
                                <img className="w-[54rem]" src={character.altImg1} />
                            </>
                            : <>
                                <img className="w-[54rem]" src={character.imgSrc} />
                            </>
                        )}
                        <div className="py-2 px-6 absolute bottom-24 left-14 border-2 border-primary backdrop-blur-xl backdrop-brightness-50 drop-shadow-2xl">
                            <h3 className="text-6xl text-white">{character.name}</h3>
                            <div className="w-full h-full absolute -bottom-2 -left-2 border-2 border-primary/20"/>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="mb-8 flex items-center space-x-4">
                            <Diamond className="text-xl text-primary" weight="fill"/>
                            <h4 className="text-4xl text-primary">Description</h4>
                            <span className="w-full h-[0.5px] bg-primary" />
                        </div>
                            <p className="text-2xl text-white">{character.description}</p>
                    </div>

                </div>
            </div>
        </section>
        <span className="w-[0.5px] flex absolute inset-y-4 left-4 bg-primary/40" />
        <span className="w-[0.5px] flex absolute inset-y-4 right-4 bg-primary/40" />
        <span className="h-[0.5px] flex absolute inset-x-4 bottom-4 bg-primary/40" />
    </>
}

export default App;