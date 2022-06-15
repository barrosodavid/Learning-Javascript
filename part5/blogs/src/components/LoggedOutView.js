import LoginForm from './LoginForm'

const LoggedOutView = ({successMessage, errorMessage, username, password, login, setUsername, setPassword}) => {
    return(<div>
    <h2>Log in the app</h2>
    <h2>{successMessage}</h2>
    <h2>{errorMessage}</h2>
    <LoginForm 
    username={username}
    password={password}
    onUserChange={({target}) => setUsername(target.value)}
    onPasswordChange={({target}) => setPassword(target.value)}
        onSubmit={login}
        ></LoginForm>
    </div>)
}

export default LoggedOutView