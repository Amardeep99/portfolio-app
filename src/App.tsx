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
        border-[#2C3E50] dark:border-white rounded-md p-4 space-y-4">
          <p className="text-black dark:text-white">25 år</p>
          <p className="text-black dark:text-white">Full-stack C#/.NET og React+TS utivkler</p>
        </div>
      </div>
    </div>
    </> 
  )
}

export default App
