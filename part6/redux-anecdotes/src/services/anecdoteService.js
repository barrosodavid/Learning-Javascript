import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export const postNewAnecdote = async (content) => {
    const newAnecdote = {content, votes: 0}
    const request = await axios.post(baseUrl, newAnecdote)
    return request.data
}

export const putAnecdoteVote = async (id)=> {
    const url = `${baseUrl}/${id}`
    const anecdotes = await getAll()
    const votedAnecdote = anecdotes.find(a => a.id === id)
    const changedAnecdote = {...votedAnecdote, votes: votedAnecdote.votes + 1}
    const response = await axios.put(url, changedAnecdote)
    return response.data
}
