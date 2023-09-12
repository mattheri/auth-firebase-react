import { configureStore } from '@reduxjs/toolkit'
import weaponReducer from "../weapons/store/weaponSlice";

export default configureStore({
	reducer: {
		weapons: weaponReducer,
	}
})