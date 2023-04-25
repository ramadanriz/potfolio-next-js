import Head from 'next/head'
import React from 'react'
import Navigation from './navigation'

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navigation />
      <div className='container mx-auto'>
        {props.children}
      </div>
    </>
  )
}

export default Layout