import React, { useEffect } from 'react'
import Head from 'next/head'
import Header from './Header'
import { useTheme } from '../hooks/useTheme'
import Footer from './Footer'

const Stage = ({children, title, navigation}) => {

  const {colors} = useTheme()

  return (
    <div className="container">
      <Head>
        <title>Nacelle Next - {title}</title>
      </Head>
      
      <Header nav={navigation}/>
      
      <main className="mainContentWrapper">
        {children}
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          background-color: ${colors.bkg};
          color: ${colors.text};
          transition: all 0.3s ease;
        }
        .mainContentWrapper {
          min-height: calc(100vh - 100px);
        }
      `}</style>
    
    </div>
  )
}

export default Stage