import Home from "./pages/home/home"
import Portfolio_details from "./pages/portfolios/portfolio_details"
import Portfolios_grid from "./pages/portfolios/portfolios_grid"
import Skills from "./pages/skills/skills"



let routes = [
    {path: '/' ,element: <Home/>},
    {path: '/portfolios' ,element: <Portfolios_grid />},
    {path: '/portfolios/:Id' ,element: <Portfolio_details />},
    {path: '/skills' ,element: <Skills />}
]

export default routes