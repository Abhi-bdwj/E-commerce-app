import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
