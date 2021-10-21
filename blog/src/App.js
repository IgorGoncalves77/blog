import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "./redux";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from "./pages/Home";

function App() {
  const { store } = createStore();

  return (
    <ReduxProvider store={store}>
      <CssBaseline />
      <Router>
        <Home />
      </Router>
    </ReduxProvider>
  );
}

export default App;