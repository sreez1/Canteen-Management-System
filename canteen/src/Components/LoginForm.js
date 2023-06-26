export const LoginForm =()=>{
    return(
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required /><br /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}