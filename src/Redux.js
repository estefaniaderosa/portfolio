const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

const INITIAL_STATE = {
	language: "spanish",
};

export const rootReducer = (state = INITIAL_STATE, action) => {
	//reducer
	switch (action.type) {
		case CHANGE_LANGUAGE:
			return { ...state, language: action.payload };
		default:
			return state;
	}
};

export const changeLanguage = (payload) => ({
	//action creator
	type: CHANGE_LANGUAGE,
	payload,
});
