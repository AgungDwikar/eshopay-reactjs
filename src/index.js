import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import store from "./redux/stores";
import storeToolkit from "./features/storeToolkit"
import {createBrowserHistory} from "history";
import {BrowserRouter} from "react-router-dom";
// import Routes from "./Routes";
import {HelmetProvider} from "react-helmet-async"
import App from "./App";

const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
    // Use setTimeout to make sure this runs after React Router's own listener
    setTimeout(() => {
      // Keep default behavior of restoring scroll position when user:
      // - clicked back button
      // - clicked on a link that programmatically calls `history.goBack()`
      // - manually changed the URL in the address bar (here we might want
      // to scroll to top, but we can't differentiate it from the others)
      if (location.action === 'POP') {
        return;
      }
      // In all other cases, scroll to top
      window.scrollTo(0, 0);
    });
  });
  
ReactDOM.render(
    <Provider store={storeToolkit}>
      <HelmetProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
      </HelmetProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
