/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Redirect, Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'
import { User } from './pages/User'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Detail path='/details/:id' />
        <Home path='/' />
        <Home path='/pet/:id' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <Navbar />
    </>
  )
}
