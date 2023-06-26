import {LoginLayout} from './Layouts/LoginLayout.js'
import { HomePageLayout} from './Layouts/HomepageLayout.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />} />
        <Route path="home" element={<HomePageLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
