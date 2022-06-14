import BlogForm from './BlogForm'
import Blog from './Blog'

const LoggedInView = ({blogs, logout, user, errorMessage, addBlog}) => {

    return (
    <div>
      <h2>{errorMessage}</h2>
      <h2>blogs</h2>
      <div>
        <h1>Welcome back {user.name}!</h1>
        <BlogForm addBlog={addBlog}></BlogForm>
      </div>      
        {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
        )}
      <button onClick={logout}>Log out</button>
      <div>
        <p>{JSON.stringify(user)}</p>
      </div>
    </div>
        
    )
}

export default LoggedInView