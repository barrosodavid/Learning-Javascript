import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogPost from './BlogPost'

const testBlog = {
    title: 'This is a test blog',
    author: 'test author',
    url: 'test url',
    likes: 20,
}

describe('blog post render', () => {
    let container

    beforeEach(() => {
        container = render(<BlogPost blog={testBlog} />).container
    })
    
    test('closed blog post shows title and author', () => {
        const div = container.querySelector('.blogContainer')
        expect(div).toHaveTextContent('This is a test blog')
        expect(div).toHaveTextContent('test author')
        expect(div).not.toHaveTextContent('test url')
        expect(div).not.toHaveTextContent(20)
    })
    
    test('opening blog post shows author and url as well', async () => {
        const user = userEvent.setup()
        const div = container.querySelector('.blogContainer')
        const button = screen.getByText('view')
        await user.click(button)
    
        expect(div).toHaveTextContent('test url')
        expect(div).toHaveTextContent(20)
    })
})



test('check like button clicked twice', async () => {
    const mockHandler = jest.fn()
    render(<BlogPost blog={testBlog} likeBlog={mockHandler} />)
    const user = userEvent.setup()
    const viewButton = screen.getByText('view')
    await user.click(viewButton)
    const likeButton = screen.getByText('Like')
    await user.click(likeButton)
    await user.click(likeButton)
    
    expect(mockHandler.mock.calls).toHaveLength(2)
})
