import BlogForm from './BlogForm'
import BlogPost from './BlogPost'
import {Title, Button, Notification, BlogsWrapper} from '../styles'
import Togglable from './Togglable'

const LoggedInView = ({blogs, logout, user, successMessage, errorMessage, addBlog, likeBlog, deleteBlog}) => {

    const getSortedBlogsByLikes = () => {
      return blogs.sort((a, b) => {
        return b.likes - a.likes
      })
    }

    return (
    <div>
      {successMessage ? <Notification>{successMessage}</Notification> : <></>}
      {errorMessage ? <Notification error>{errorMessage}</Notification> : <></>}
      <header>
      <Title>Blog</Title>
      <h1>Welcome back {user.name}!</h1>
      <Button onClick={logout}>Log out</Button>
      </header>
      <Togglable showText='Add post' hideText='Cancel' big>
        <BlogForm addBlog={addBlog}></BlogForm>
      </Togglable>
      <BlogsWrapper>
        {getSortedBlogsByLikes().map(blog => {
          const deletable = blog.user.username === user.username
          return <BlogPost key={blog.id} 
          blog={blog} 
          likeBlog={async () => await likeBlog(blog)}
          deleteBlog={async () => await deleteBlog(blog)} 
          deletable={deletable}/>
        }
        )}
      </BlogsWrapper>
    </div>
        
    )
}

export default LoggedInView