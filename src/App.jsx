import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Menu1 from "./pages/menu/menu1/Menu1"
import Blog from "./pages/blog/Blog"
import Pricing from "./pages/pricing/Pricing"
import Contact from "./pages/contact/Contact"


const App = () => {
  let router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
          {
            path:"/home",
            element:<Home/>
          },
          {
            path:"/menu",
            element:<Menu1/>
          },
          {
            path:"/blog",
            element:<Blog/>
          },
          {
            path:"/pricing",
            element:<Pricing/>
          },
          {
            path:"/contact",
            element:<Contact/>
          }
        ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App