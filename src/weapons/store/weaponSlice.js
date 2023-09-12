import { createSlice } from "@reduxjs/toolkit"
import reducers from './weaponReducers';

const weaponSlice = createSlice({
	name: "weapons",
	initialState: {
		weapons: [],
	},
	reducers: reducers,
})

export const { addWeapons } = weaponSlice.actions;

export default weaponSlice.reducer;