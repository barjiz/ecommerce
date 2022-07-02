import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
    },
    mobile: "768px",
    darkmode: false,
    isGrocery: true,
};

const featuresSlice = createSlice({
    name: "features",
    initialState,
    reducers: {
        setDarkTheme(state) {
            // state.colors.header = state.darkmode ? "#324B50" : "#ebfbff";
            // state.colors.body = state.darkmode ? "#445155" : "#fff";
            state.darkmode = !state.darkmode;
        },
        setGrocery(state, actions) {

            state.isGrocery = actions.payload;
        }
    },
});

export const { setDarkTheme, setGrocery } = featuresSlice.actions;

export default featuresSlice.reducer;
