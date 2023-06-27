import { HomepageHeader } from "../Components/Header"
import { UtensilButton, FoodItemButton, UtilityButton } from "../Components/PageButtons"
import { Outlet } from "react-router-dom"
export const HomePageLayout = () =>{
    return(
        <div>
            <HomepageHeader />
            <UtensilButton />
            <FoodItemButton />
            <UtilityButton/>
            <Outlet />
        </div>
    )
}