import React, { createContext, useContext, useState, useEffect } from 'react'
import createClient from '../_nacelle/nacelleClient'
import NacelleClient from '@nacelle/client-js-sdk'
import fetch from 'isomorphic-unfetch'
import { IFNacelleClientSettings } from '../_nacelle/nacelleClient';

interface IFNacelleContext {
  client: NacelleClient | false
  clientAvailable: boolean
}

export const NacelleContext: React.Context<any> = createContext({})

export const useNacelle = () => {
  const Context: IFNacelleContext = useContext(NacelleContext)
  return Context
}


export const NacelleProvider: React.FC<any> = ({children}) =>{

  // states
  const [first, setFirst] = useState(true)
  const [clientAvailable, setClientAvailable] = useState(false)
  const [clientSettings, setClientSettings] = useState({id: '', token: '', locale: '', nacelleEndpoint: ''})
  
  // client 
  const client = clientAvailable ? createClient(clientSettings) : false
  
  const getClientSettings = async () => {
    try {
      const settingsResponse = await ( await fetch('/api/abscratednacelleconfig', {method: 'POST'})).json()
      if(settingsResponse) {
        
        const settings: IFNacelleClientSettings = settingsResponse.payload
        setClientSettings(settings)
        setClientAvailable(true)
        setFirst(false)
      
      }
    } catch (error) {
      console.error(error.message)
      setFirst(true) // stop it going circular
    }
  }

  // Helper methods and extractions go here. 
  useEffect(() => {
    if(first && !clientAvailable) {
      getClientSettings()
    }
  }, [])

  const context: IFNacelleContext = {
    client,
    clientAvailable,

  }

  return (
      <NacelleContext.Provider value={context}>
        {children}
      </NacelleContext.Provider>
    )
}


export default NacelleProvider