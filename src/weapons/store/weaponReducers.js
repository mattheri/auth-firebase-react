const reducers = {
	addWeapons: (state, action) => {
		state.weapons = action.payload;
	}
}

export default reducers;