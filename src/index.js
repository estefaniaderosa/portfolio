import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { rootReducer } from "./Redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //para poder usar reduxDevTools uno eso con compose

const store = createStore(
	//para formar el store uno el reducer y lo de arriba , sino quiero reduxDevTools pongo compose ahi directamente
	rootReducer,
	composeEnhancers()
);

//envuelvo a la app con el provider para poder acceder al store desde toda la app

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
