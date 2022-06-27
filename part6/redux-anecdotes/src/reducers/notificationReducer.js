import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notification: ""
}

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        showNotification(state, action) {
            state.notification = action.payload
        },
        removeNotification(state, action) {
            state.notification = ''
        }
    }
})

export const {showNotification, removeNotification} = notificationSlice.actions

export default notificationSlice.reducer