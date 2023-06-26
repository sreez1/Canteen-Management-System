import {Link } from "react-router-dom";

export const LoginForm =()=>{
    return(
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required /><br /><br />
                <Link to="/home"><input type="submit" value="Login" /></Link>
            </form>
        </div>
    )
}