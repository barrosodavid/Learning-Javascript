import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notification: '',
    timeoutID: 0
}

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setNotification(state, action) {
            const {notification, timeoutID} = action.payload
            if (state.timeoutID && (timeoutID !== state.timeoutID)) {
                clearTimeout(state.timeoutID)
            }
            state.notification = notification
            state.timeoutID = timeoutID
        },
        removeNotification(state, action) {
            state.notification = ''
            state.timeoutID = 0
        }
    }
})

export const {setNotification, removeNotification} = notificationSlice.actions

export const showNotification = (notification, time) => {
    return dispatch => {
        const timeoutID = setTimeout(() => dispatch(removeNotification()), time)
        dispatch(setNotification({notification, timeoutID}))
    }
  }

export default notificationSlice.reducer