import LoginForm from './LoginForm'
import { Title, Notification } from '../styles'

const LoggedOutView = ({successMessage, errorMessage, username, password, login, setUsername, setPassword}) => {
    return(<div>
    <h2>Log in the app</h2>
    {successMessage ? <Notification>{successMessage}</Notification> : <></>}
    {errorMessage ? <Notification error>{errorMessage}</Notification> : <></>}
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