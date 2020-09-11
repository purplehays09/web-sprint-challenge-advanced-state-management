import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {createStore} from 'redux'
import {reducer} from "./reducers"
import {Provider} from 'react-redux'
import App from "./components/App";

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));
