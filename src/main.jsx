import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store.jsx";

import App from "./App.jsx";
import { Counter } from "./features/counter/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Counter />
  </Provider>
);
