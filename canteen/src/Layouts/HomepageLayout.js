import { HomepageHeader } from "../Components/Header"
import { UtensilButton, FoodItemButton, UtilityButton } from "../Components/PageButtons"

export const HomePageLayout = () =>{
    return(
        <div>
            <HomepageHeader />
            <UtensilButton />
            <FoodItemButton />
            <UtilityButton/>
        </div>
    )
}