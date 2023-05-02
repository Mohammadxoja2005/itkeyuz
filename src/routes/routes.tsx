import { createBrowserRouter } from "react-router-dom";
import HOME from "../pages/home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HOME />
    }
])
