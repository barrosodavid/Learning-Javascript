import React from 'react'
import PropTypes from 'prop-types'
import {Button, Form, Input} from '../styles'

const LoginForm = ({username,password,onUserChange,onPasswordChange,onSubmit}) => {
    return(
        <Form onSubmit={onSubmit}>
            <div>
                username
                <Input type="text" 
                    name="Username"
                    value={username}
                    onChange={onUserChange}
                    placeholder="User"></Input>
            </div>
            <div>
                password
                <Input type="password" 
                    name="Password"
                    value={password}
                    onChange={onPasswordChange}
                    placeholder="Password"></Input>
            </div>
            <Button type="submit">Log in</Button>
        </Form>
    )
}

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onUserChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default LoginForm