import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'ids',
    initialState: {
        value: []
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },
        remove: (state, action) => {
            state.value = state.value.filter(item => item !== action.payload);
        }
    }
})

export const { add, remove } = counterSlice.actions
export default counterSlice.reducer