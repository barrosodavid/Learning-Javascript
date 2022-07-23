import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'

test('create blog form passes correct props to function', async () => {
    const testBlog = {
        title: 'This is a test blog',
        author: 'test author',
        url: 'test url',
    }

    const createBlog = jest.fn()
    const setBlogVisible = jest.fn()
    const user = userEvent.setup()

    render(<BlogForm blogFormVisible={true} addBlog={createBlog} setBlogFormVisible={setBlogVisible} />)

    const inputs = screen.getAllByRole('textbox')
    const createButton = screen.getByText('Create')

    expect(inputs).toHaveLength(3)
    await user.type(inputs[0], testBlog.title)
    await user.type(inputs[1], testBlog.author)
    await user.type(inputs[2], testBlog.url)

    await user.click(createButton)
    expect(createBlog.mock.calls).toHaveLength(1)
    expect(createBlog.mock.calls[0][0]).toMatchObject(testBlog)
})