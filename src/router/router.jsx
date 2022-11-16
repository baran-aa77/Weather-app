import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home/Home';
import SinglePage from "../Pages/SinglePage/SinglePage";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: 'weather/:city',
        element: <SinglePage/>
    },
]);
export default route