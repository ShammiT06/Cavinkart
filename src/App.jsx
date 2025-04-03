import { BrowserRouter, Route,Routes } from "react-router-dom"
import Terms from "./Pages/Terms"
import Camera from "./Pages/Camera"
import Location from "./Pages/Location"

function App()
{
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Terms/>}></Route>
    <Route path="/cam" element={<Camera/>}></Route>
    <Route path="/loc" element={<Location/>}></Route>

  </Routes>
  </BrowserRouter>

  </>)

}
export default App