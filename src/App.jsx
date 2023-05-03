import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from "./pages/Search"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="bg-slate-100">

          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route exact path="/:searchterm" element={<Search />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
