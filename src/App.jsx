import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from "react"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Blog from "./pages/blog/Blog"
import Pricing from "./pages/pricing/Pricing"
import Contact from "./pages/contact/Contact"
import Menu2 from "./pages/menu/menu2/Menu2"
import Menu3 from "./pages/menu/menu3/Menu3"
import Loading from "./components/shared/Loading/Loading"

let Menu1 = lazy(()=>import('./pages/menu/menu1/Menu1'))


const App = () => {
  let router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/home",
            element:<Home/>
          },
          {
            path:"/menu",
            element:<Suspense fallback={<Loading/>}>
              <Menu1/>
            </Suspense>
          },
          {
            path:"/menu2",
            element:<Menu2/>
          },
          {
            path:"/menu3",
            element:<Menu3/>
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