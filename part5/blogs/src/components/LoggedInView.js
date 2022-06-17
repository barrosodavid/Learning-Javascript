import BlogForm from './BlogForm'
import BlogPost from './BlogPost'
import {Title, Button, Notification, BlogsWrapper} from '../styles'

const LoggedInView = ({blogs, logout, user, successMessage, errorMessage, addBlog}) => {

    return (
    <div>
      {successMessage ? <Notification>{successMessage}</Notification> : <></>}
      {errorMessage ? <Notification error>{errorMessage}</Notification> : <></>}
      <Title>Blog</Title>
      <div>
        <h1>Welcome back {user.name}!</h1><Button onClick={logout}>Log out</Button>
        <BlogForm addBlog={addBlog}></BlogForm>
      </div>
      <BlogsWrapper>
        {blogs.map(blog =>
        <BlogPost key={blog.id} blog={blog} />
        )}
      </BlogsWrapper>
    </div>
        
    )
}

export default LoggedInView