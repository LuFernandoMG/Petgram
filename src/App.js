/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import Context from './Context'

const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Detail path='/details/:id' />
        <Home path='/' />
        <Home path='/pet/:id' />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }
      </Context.Consumer>
      <Navbar />
    </>
  )
}
