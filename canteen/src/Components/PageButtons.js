import {Link } from "react-router-dom"

export const UtensilButton =()=>{
    return(
        <div>
            <Link to="/utensil"><button>Utensils</button></Link>
        </div>
    )
}

export const FoodItemButton =()=>{
    return(
        <div>
            <Link to="/fooditem"><button>Food Items</button></Link>
        </div>
    )
}

export const UtilityButton =()=>{
    return(
        <div>
            <Link to="/utility"><button>Utility</button></Link>
        </div>
    )
}

export const AddItemButton =()=>{
    return(
        <div>
            <button>Add Item</button>
        </div>
    )
}