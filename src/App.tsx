import { useEffect, useState } from "react";
import { Header } from "./assets/Header/Header"


function App() {
  const [darkmode, setDarkmode] = useState(false);
  
  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkmode]);

  return (
    <>
    <Header darkmode={darkmode} setDarkmode={setDarkmode}/>
    <div className="w-screen h-screen bg-white dark:bg-[#212121]">
      <div className="flex">
        <img src="portrett.tiff" className="rounded-full w-[15%] h-[30%] mt-4 ml-4 border-4 border-[#2C3E50] dark:border-white" />

        <div className="table-column mt-8 ml-8 border-2 dark:bg-[#2f2f2f] bg-white 
        border-[#2C3E50] dark:border-white rounded-md p-4 space-y-8">
          <p className="text-black dark:text-white">25 år</p>
          <p className="text-black dark:text-white">Full-stack C#/.NET og React+TS utivkler</p>
          <p className="text-black dark:text-white">Konsulent for Academic Works</p>
          <p className="text-black dark:text-white">Utleid til UDI (Utlendingsdirektoratet)</p>
        </div>

        <div>
        <div className="flex w-screen space-x-1 px-14 py-4"> 
          <img src="csharp.png" className="w-28"/> 
          <img src="dotnet.png" className="w-28 rounded-full"/>
      <img src="react.png" className="w-28"/>

        </div>
      </div>  
      </div>
    </div>
    </> 
  )
}

export default App
