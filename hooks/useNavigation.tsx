import React, { createContext, useContext, useState } from 'react'
import TopNav from '../components/Navigation/TopNav';
import { TuseNavigation, IFNavigationContext, IFNavigationProvider } from '../_types/navigation';




export const NavigationContext: React.Context<any> = createContext({})

export const useNavigation: TuseNavigation = () => {
  const Context: IFNavigationContext = useContext(NavigationContext)
  const {nav, toggleOpen, navOpen, setNav} = Context

  return {nav, toggleOpen, navOpen, setNav}
}


export const NavigationProvider: React.FC<IFNavigationProvider> = ({children}) =>{
  
  const [navOpen, setNavOpen] = useState(false)
  const [nav, setNav] = useState({init: true})

  const context : IFNavigationContext = {
    nav,
    navOpen,
    setNav,
    toggleOpen: () => setNavOpen(!navOpen)
  }


  return (
      <NavigationContext.Provider value={context}>
        {children}
      </NavigationContext.Provider>
    )
}


export default NavigationProvider