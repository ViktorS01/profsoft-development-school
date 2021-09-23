import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {CertificateWrapper} from "./Context/certificateWrapper";
import {Provider} from "react-redux";
import { store} from './redux/store'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <CertificateWrapper>
                <Provider store={store}>
                    <App/>
                </Provider>
            </CertificateWrapper>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
