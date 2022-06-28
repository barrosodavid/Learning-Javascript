import { createSlice } from "@reduxjs/toolkit";
import {getAll, putAnecdoteVote, postNewAnecdote} from "../services/anecdoteService";

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        /*
        addVote(state, action) {
            const id = action.payload;
            const anecdoteToChange = state.find(a => a.id === id);
            const changedAnecdote = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes + 1,
            };
            return state.map((a) => (a.id === id ? changedAnecdote : a));
        },*/
        setAnecdote(state, action) {
            const { id } = action.payload
            return state.map((a) => (a.id === id ? action.payload : a))
        },
        setAnecdotes(state, action) {
            return action.payload
        },
        appendAnecdote(state, action) {
            state.push(action.payload)
        }
    },
});

export const { setAnecdote, setAnecdotes, appendAnecdote} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const voteAnecdote = id => {
  return async dispatch => {
    const changedAnecdote = await putAnecdoteVote(id)
    dispatch(setAnecdote(changedAnecdote))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
      const newAnecdote = await postNewAnecdote(content)
      dispatch(appendAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer;
