import { createBrowserRouter } from "react-router-dom";
import HOME from "../pages/home";
import ReactGA from 'react-ga';

ReactGA.initialize('G-P6VXXJRC1Z');

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HOME />
    }
])
