import { BrowserRouter, Route,Routes } from "react-router-dom"
import Reusablespinz from "./Components/Reusablespinz"
import Terms from "./Pages/Terms"
import Camera from "./Pages/Camera"

function App()
{
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Terms/>}></Route>
    <Route path="/cam" element={<Camera/>}></Route>
  </Routes>
  </BrowserRouter>

  </>)

}
export default App