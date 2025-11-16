import Home from "./components/Home"
import NotFound from "./pages/notFound"



let routes = [
    {path: '/' ,element: <Home/>},
    {path: '*' ,element: <NotFound/>},
]

export default routes