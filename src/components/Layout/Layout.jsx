import Header from 'components/Header/Header'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from 'components/Loader/Loader'


const Layout = () => {
  return (
    <>
    <Header />
    <main>
        <Suspense fallback={<Loader />} >
            <Outlet />
        </Suspense>
    </main>
      
    </>
  )
}

export default Layout
