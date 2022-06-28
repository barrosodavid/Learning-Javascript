import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notification: ""
}

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setNotification(state, action) {
            state.notification = action.payload
        },
        removeNotification(state, action) {
            state.notification = ''
        }
    }
})

export const {setNotification, removeNotification} = notificationSlice.actions

export const showNotification = (notification, time) => {
    return dispatch => {
        dispatch(setNotification(notification))
        setTimeout(() => dispatch(removeNotification()), time)
    }
  }

export default notificationSlice.reducer