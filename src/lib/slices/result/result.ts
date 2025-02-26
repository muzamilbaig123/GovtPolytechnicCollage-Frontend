import { createSlice } from "@reduxjs/toolkit";

const result = createSlice({
    name: "Result",
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        }
    }
});

export const { setUserId } = result.actions;

export default result.reducer