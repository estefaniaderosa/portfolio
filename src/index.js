import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { rootReducer } from "./Redux";

//redux devtools config
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//To create store, joined reducer and the enhancers (when not using redux devtools compose can be used from here)
const store = createStore(rootReducer, composeEnhancers());

//App wrapped in provider in order to have access to the store across the app.
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
