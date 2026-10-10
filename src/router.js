import Home from "./pages/home/home"
import Portfolios_grid from "./pages/portfolios/portfolios_grid"



let routes = [
    {path: '/' ,element: <Home/>},
    {path: '/portfolios' ,element: <Portfolios_grid />},
]

export default routes