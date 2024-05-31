import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextApi } from "./utils/ContextApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextApi>
    <App />
  </ContextApi>
);
