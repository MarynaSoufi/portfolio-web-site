import React from 'react'
import { Header, Footer } from '../components/layout'
const BaseLayouts = ({children}) => {
  return (
    <>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
    </>
  )
}

export default BaseLayouts;
