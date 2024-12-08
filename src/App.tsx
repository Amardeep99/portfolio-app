import { Header } from "./assets/Header/Header"


function App() {

  return (
    <>
    <Header />
    <div className="flex">
      <img src="portrett.tiff" className="rounded-full w-[15%] h-[30%] mt-4 ml-4" />
      <div className="table-column mt-8 ml-8 border-2 border-[#95A5A6] rounded-md p-4">
        <p>25 år</p>
      </div>
    </div>
    </> 
  )
}

export default App
