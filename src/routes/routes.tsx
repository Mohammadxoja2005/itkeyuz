import { createBrowserRouter } from "react-router-dom";
import HOME from "../pages/home";
import NOTIFICATION from "../pages/notification";
// google analytics
import ReactGA from 'react-ga';

ReactGA.initialize('G-P6VXXJRC1Z');

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HOME />
    },
    {
        path: "/notification",
        element: <NOTIFICATION />
    },
])
