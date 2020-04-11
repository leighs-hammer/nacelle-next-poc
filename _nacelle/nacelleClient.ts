// @todo surface as a hook
import NacelleClient from '@nacelle/client-js-sdk'
import CONFIG from '../config.fe'

// @todo move to d.ts

export interface IFNacelleClientSettings {
  id: string, 
  token: string,
  locale: string, 
  nacelleEndpoint: string
}

type TCreateNacelleClient = (settings: IFNacelleClientSettings) => NacelleClient

const createClient: TCreateNacelleClient = (settings) => new NacelleClient(settings)

export default createClient