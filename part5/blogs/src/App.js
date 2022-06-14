import { useState, useEffect } from 'react'
import LoggedInView from './components/LoggedInView'
import LoggedOutView from './components/LoggedOutView'
import blogService from './services/blogs'
import loginService from './services/loginService'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  //Check if already loggged in
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  },[])

  const login = async (e) => {
    e.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log(exception)
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  }

  const logout = async () => {
    window.localStorage.removeItem('loggedBlogappUser')
    blogService.setToken(null)
    setUser(null)
  }

  const addBlog = async (blog) => {
    console.log(blog)
    blogService.create(blog)
  }

  const loggedOutViewProps = {
    errorMessage,
    username,
    password,
    login,
    setUsername,
    setPassword
  }
  const loggedInViewProps = {
    errorMessage,
    logout,
    user,
    blogs,
    addBlog
  }

  //Conditional rendering
  if (!user) {
    return (
      <LoggedOutView 
      {...loggedOutViewProps}
      >
      </LoggedOutView>
    )
  } 
  return (
    <LoggedInView 
    {...loggedInViewProps}
    ></LoggedInView>
  )
  
}

export default App
