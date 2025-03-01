import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen  bg-gray-50 dark:bg-[#4A5565]">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
