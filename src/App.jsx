import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from "react"
import Layout from "./layout/Layout"
import Blog from "./pages/blog/Blog"
import Home from "./pages/home/Home"
import Pricing from "./pages/pricing/Pricing"
import Contact from "./pages/contact/Contact"
import Menu2 from "./pages/menu/menu2/Menu2"
import SignUp from "./pages/sign-up/SignUp"
import Loading from "./components/shared/Loading/Loading"
import Menu3loading from "./components/shared/Loading/menu3Loading/Menu3loading"
import Prisingloading from "./components/shared/prisingloading/prisingloading"

let Menu1 = lazy(()=>import('./pages/menu/menu1/Menu1'))
let Menu3 = lazy(()=>import('./pages/menu/menu3/Menu3'))
let Home = lazy(()=>import('./pages/home/Home'))
let Pricing = lazy(()=>import('./pages/pricing/Pricing'))



let Blog = lazy(()=>import ("./pages/blog/Blog"))

const App = () => {
  let router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
          {
            path:"/",
            element:<Suspense fallback={<Menu3loading />}>
            <Home/>
          </Suspense>
          },
          {
            path:"/home",
            element:<Suspense fallback={<Menu3loading />}>
            <Home/>
          </Suspense>
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
            element: <Suspense fallback={<Menu3loading />}>
              <Menu3/>
            </Suspense>
          },
          {
            path:"/blog",
            element:<Suspense fallback={<Menu3loading />}>
            <Blog/>
          </Suspense>
          },
          {
            path:"/pricing",
            element:<Suspense fallback={<Prisingloading/>}>
            <Pricing/>
          </Suspense>
             
          },
          {
            path:"/contact",
            element:<Contact/>
          },
          {
            path:"/sign-up",
            element:<SignUp/>
          },
          {
            path:"/js",
            element:<Menu3loading/>
          }
        ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App