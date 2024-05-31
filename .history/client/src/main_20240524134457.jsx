import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextApi } from "./utils/ContextApi.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextApi>
    <App />
  </ContextApi>
);
