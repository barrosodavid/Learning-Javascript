import BlogForm from './BlogForm'

const LoggedInView = ({username}) => {
    return (
        <div>
            <h1>Welcome back {username}!</h1>
            <BlogForm></BlogForm>
        </div>
    )
}

export default LoggedInView