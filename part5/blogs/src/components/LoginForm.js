
const LoginForm = ({username,password,onUserChange,onPasswordChange,onSubmit}) => {
    return(
        <form>
            <div>
                username
                <input type="text" 
                name="Username"
                value={username}
                onChange={onUserChange}
                placeholder="User"></input>
            </div>
            <div>
                password
                <input type="password" 
                name="Password"
                value={password}
                onChange={onPasswordChange}
                placeholder="Password"></input>
            </div>
            <button type="submit" onClick={onSubmit}>Log in</button>
        </form>
    )
}

export default LoginForm