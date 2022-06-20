import { useState, useEffect } from 'react'
import LoggedInView from './components/LoggedInView'
import LoggedOutView from './components/LoggedOutView'
import blogService from './services/blogs'
import loginService from './services/loginService'
import {Page} from './styles'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])

  const [successMessage, setSuccessMessage] = useState('')
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
    try {
      const newBlog = await blogService.create(blog)
      setSuccessMessage(`New blog '${newBlog.title}' by ${newBlog.author} created`)
      setBlogs(blogs.concat(newBlog))
      setTimeout(() => {
        setSuccessMessage('')
      }, 5000)
    } catch (exception) {
      console.log(exception)
      setErrorMessage('There was an error when adding the blog post')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  }

  const likeBlog = async (blog) => {
    try {
      const {user, author, title, url, id} = blog
      const newBlog = {
        user,
        likes: blog.likes + 1,
        author,
        title,
        url
      }
      await blogService.update(id, newBlog)
      let newBlogs = [...blogs]
      newBlogs.forEach((blogIt) => {
        if(blogIt.id === blog.id)
          blogIt.likes += 1
      })
      setBlogs(newBlogs)
      setSuccessMessage(`Added like to '${newBlog.title}'`)
      setTimeout(() => {
        setSuccessMessage('')
      }, 5000)
    } catch(exception) {
      console.log(exception)
      setErrorMessage('There was an error when liking the blog post')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  }

  const deleteBlog = async (blog) => {
    if(window.confirm(`Do you want to delete ${blog.title}?`)){
      try {
        console.log("Trying to remove...")
        await blogService.remove(blog.id)
        setBlogs(blogs.filter((blogIt) => blogIt.id !== blog.id))
        setSuccessMessage(`Deleted blog ${blog.title}`)
        setTimeout(() => {
          setSuccessMessage('')
        }, 5000)
      }catch(exception) {
        setErrorMessage('There was an error when deleting the blog post')
        setTimeout(() => {
          setErrorMessage('')
        }, 5000)
      }
    }
  }

  const loggedOutViewProps = {
    successMessage,
    errorMessage,
    username,
    password,
    login,
    setUsername,
    setPassword
  }
  const loggedInViewProps = {
    successMessage,
    errorMessage,
    logout,
    user,
    blogs,
    addBlog,
    likeBlog,
    deleteBlog
  }

  //Conditional rendering
  if (!user) {
    return (
      <Page>
        <LoggedOutView 
        {...loggedOutViewProps}
        >
        </LoggedOutView>
      </Page>
    )
  } 
  return (
    <Page>
      <LoggedInView 
      {...loggedInViewProps}
      ></LoggedInView>
    </Page>
  )
  
}

export default App
