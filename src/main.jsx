import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/route.jsx";
import "@ant-design/v5-patch-for-react-19";

createRoot(document.getElementById("root")).render(<Router />);
