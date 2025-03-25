import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import FormAction from "./FormAction.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {/* <App /> */}
      <FormAction></FormAction>
    </ThemeProvider>
  </StrictMode>
);
