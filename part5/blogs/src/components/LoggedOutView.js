import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'
import { Title, Notification } from '../styles'

const LoggedOutView = ({successMessage, errorMessage, username, password, login, setUsername, setPassword}) => {
    return(<div>
        <Title>Log in the app</Title>
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

LoggedOutView.propTypes = {
    successMessage: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    login: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired
}

export default LoggedOutView