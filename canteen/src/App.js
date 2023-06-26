import {LoginLayout} from './Layouts/LoginLayout.js'
import { HomePageLayout} from './Layouts/HomepageLayout.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UtensilsLayout } from './Pages/UtensilsLayout.js';
import {UtilityLayout } from './Pages/UtilityLayout.js';
import {FoodItemsLayout} from './Pages/FoodItemsLayout.js'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginLayout />} />
        <Route path="/home" exact element={<HomePageLayout />} >
          <Route path="/home/utensil" exact element={<UtensilsLayout />} />
          <Route path="/home/utility" exact element={<UtilityLayout />} />
          <Route path="/home/fooditem" exact element={<FoodItemsLayout />} />
        </Route>
        <Route path="*/" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
