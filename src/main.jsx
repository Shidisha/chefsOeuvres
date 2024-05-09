import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/public/home.jsx'
import Explore from './pages/public/explore.jsx'
import Reservation from './pages/public/reservation.jsx'
import Parametre from './pages/public/parametre.jsx'
import Profil from './pages/public/profil.jsx'
import NotFound from './utils/not_Found.jsx'
import AllProprety from './components/all_proprety.jsx'
import PopularProrety from './components/popular_prorety.jsx'
import RecommendedProprety from './components/recommended_proprety.jsx'
import NeardYou from './components/neard_you.jsx'
import Authentification from './pages/public/auth/authentification.jsx'
import LoginPage from './pages/public/auth/loginPage.jsx'
import SignupPage from './pages/public/auth/signupPage.jsx'

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>, 
        children : [
          {
            path:'/',
            element: <AllProprety/>
          },
          {
            path:'/popular_proprety',
            element: <PopularProrety/>
          },
          {
            path:'/recommended_proprety',
            element: <RecommendedProprety/>
          },
          {
            path:'/neard_you',
            element: <NeardYou/>
          },
        ],
      },  
      {
        path:'/explore',
        element: <Explore/>
      },
      {
        path: '/reservation',
        element: <Reservation/>
      },
      {
        path: '/Parametre',
        element: <Parametre/>
      },
      {
        path: '/profil',
        element: <Profil/>
      },
      {
        path: '*',
        element: <NotFound/>
      }
      
    ]
  },
  {
    path: '/',
    element: <Authentification/>,
    children: [
      {
        path:'/loginPage',
        element:<LoginPage/>,
      },
      {
        path:'/signupPage',
        element:<SignupPage/>,
      }
    ]
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
