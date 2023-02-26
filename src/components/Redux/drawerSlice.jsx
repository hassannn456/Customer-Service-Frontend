import { createSlice } from "@reduxjs/toolkit";

const drawerSlice= createSlice({
    name: 'drawer',
    initialState: { activeButton: 'Scheduler'},
    reducers: {
        toggle(state, action){
            const value= action.payload;
            state.activeButton = value
        },
    }
})


export const drawerActions= drawerSlice.actions;
export default drawerSlice.reducer;