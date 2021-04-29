import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Ford',
        model: "Durango",
        year: "2012",
        color: 'White'
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, } = rootSlice.actions;