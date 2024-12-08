import React from "react"

interface HeaderProps {
    darkmode: boolean;
    setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ darkmode, setDarkmode }: HeaderProps) {


    return(
        <div className="relative w-screen h-32 bg-[#2C3E50] flex items-center justify-between px-6">
            <div className="flex space-x-4 align-bottom">
                <a href="https://github.com/Amardeep99/portfolio-app" className="text-white underline mt-2">
                Se denne koden på GitHub!
                </a>
                <img src="github-dark.png" className="h-8 w-8"/>
            </div>
            <a href="/CV.pdf" className="flex space-x-4 border-2 border-white px-4 py-2 rounded-2xl h-auto hover:border-[#3498DB]">
                <p className="relative text-white text-center mt-2">Last ned min CV :)</p>
                <img src="download.png" className="h-10 w-10"/>
            </a>
            <img src={darkmode ? "dark.png" : "light.png"} className="h-10 w-10 cursor-pointer" onClick={() => setDarkmode(!darkmode)}/>
        </div>
    )
}