import React from "react"

interface HeaderProps {
    darkmode: boolean;
    setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ darkmode, setDarkmode }: HeaderProps) {
    return(
        <div className="relative w-screen h-32 bg-[#2C3E50] flex items-center justify-evenly">
            <div className="flex space-x-3 align-bottom">
                <a href="https://github.com/Amardeep99/portfolio-app" className="text-white underline">
                Se denne koden på GitHub!
                </a>
                <img src="github.png" className="h-8 w-8"/>
            </div>
        <p className="relative text-white text-center">Amardeep Singh</p>
        <img src={darkmode ? "dark.png" : "light.png"} className="h-8 w-8 cursor-pointer" onClick={() => setDarkmode(!darkmode)}/>
        </div>
    )
}