import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import LoggedInView from './components/LoggedInView'
import blogService from './services/blogs'
import loginService from './services/loginService'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])

  const [errorMesssage, setErrorMessage] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const login = async (e) => {
    e.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })
      blogService.setToken(user.token)
      setUser(user.data)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log(exception)
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
    console.log('hallo')
  }
  if (!user) {
    return (
      <div>
        <h2>Log in the app</h2>
        <h2>{errorMesssage}</h2>
        <LoginForm 
        username={username}
        password={password}
        onUserChange={({target}) => setUsername(target.value)}
        onPasswordChange={({target}) => setPassword(target.value)}
          onSubmit={login}
          ></LoginForm>
      </div>
    )
  } 
  return (
    <div>
      <h2>{errorMesssage}</h2>
      <h2>blogs</h2>
      <LoggedInView username={user.name}></LoggedInView> 
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      
      
      <div>
        <p>{JSON.stringify(user)}</p>
      </div>
    </div>
  )
  
}

export default App
