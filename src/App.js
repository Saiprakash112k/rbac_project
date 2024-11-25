import React from "react";
import "./App.css";
import AppRoutes from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
const App = () => {

  return (
    <Provider store={store}>
    <div className="app">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </div>
    </Provider>
  );
};

export default App;
