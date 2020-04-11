import React from "react"
import Head from 'next/head'
import '../styles/global.scss'
import ThemeProvider from '../hooks/useTheme'
import NavigationProvider from "../hooks/useNavigation"
import NacelleProvider from '../hooks/useNacelle';

const AppWrapper = ({Component, pageProps}) => {

  return (
    <div className="nacelleWrapper">
      <Head>
        <link rel='icon' href='/static/favicon.ico' />
        <link rel="icon" type="image/x-icon" href="static/favicon.ico" />

        <link rel="manifest" href="/static/manifest.json" />
        <meta name="theme-color" content="#222222"/>
        <meta name="description" content="A demo of next using Nacelle for static builds"/>
      </Head>
      
      <NacelleProvider>
        <ThemeProvider>
          <NavigationProvider>
            <Component {...pageProps} />
          </NavigationProvider>
        </ThemeProvider>
      </NacelleProvider>
    </div>
  )
}

export default AppWrapper