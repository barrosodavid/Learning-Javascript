import React,{useState} from 'react'
import PropTypes from 'prop-types'
import BlogForm from './BlogForm'
import BlogPost from './BlogPost'
import {Title, Button, Notification, BlogsWrapper, Page} from '../styles'

const LoggedInView = ({blogs, logout, user, successMessage, errorMessage, addBlog, likeBlog, deleteBlog}) => {

    const [blogFormVisible, setBlogFormVisible] = useState(false)

    const getSortedBlogsByLikes = () => {
        return blogs.sort((a, b) => {
            return b.likes - a.likes
        })
    }

    return (
        <>
            <BlogForm addBlog={addBlog} blogFormVisible={blogFormVisible} setBlogFormVisible={setBlogFormVisible}></BlogForm>
            {successMessage ? <Notification>{successMessage}</Notification> : <></>}
            {errorMessage ? <Notification error>{errorMessage}</Notification> : <></>}
            <Page>
                <div style={{filter: blogFormVisible ? 'blur(2px)' : 'none'}}>
                    <header>
                        <Title>Blog</Title>
                        <h1>Welcome back {user.name}!</h1>
                        <Button onClick={logout}>Log out</Button>
                        <Button onClick={() => setBlogFormVisible(true)}>Add post</Button>
                    </header>
                
                    <BlogsWrapper>
                        {getSortedBlogsByLikes().map((blog, index) => {
                            const deletable = blog.user.username === user.username
                        
                            //Add horizontal line break every 3 blog posts
                            if ((index + 1) % 3 === 0) {
                                return <><BlogPost key={blog.id} 
                                    blog={blog} 
                                    likeBlog={async () => await likeBlog(blog)}
                                    deleteBlog={async () => await deleteBlog(blog)} 
                                    deletable={deletable}/><hr/></>
                            }

                            return <BlogPost key={blog.id} 
                                blog={blog} 
                                likeBlog={async () => await likeBlog(blog)}
                                deleteBlog={async () => await deleteBlog(blog)} 
                                deletable={deletable}/>
                        }
                        )}
                    </BlogsWrapper>
                </div>
            </Page>
        </>
    )
}

LoggedInView.propTypes = {
    blogs: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    addBlog: PropTypes.func.isRequired,
    likeBlog: PropTypes.func.isRequired,
    deleteBlog: PropTypes.func.isRequired,
}

export default LoggedInView