import verifiedConnection from "./_middleware/verifiedConnection"
import { IFNacelleClientSettings } from '../../_nacelle/nacelleClient';
import { NextApiRequest, NextApiResponse } from 'next';
import btoa from 'btoa'

const getNacelleConfig = async (req: NextApiRequest, res: NextApiResponse) => {
  
  // Got here it is verified by middleware
  const nacelleClientSettings : IFNacelleClientSettings = {
    id: process.env.NACELLE_ID,
    token: process.env.NACELLE_TOKEN,
    locale: 'en-us',
    nacelleEndpoint: process.env.NACELLE_ENDPOINT
  }
  
  // nothing secure about this its just base 64ed for now a signing key would be better
  return res.status(200).json({payload: btoa(JSON.stringify(nacelleClientSettings))})
}

export default verifiedConnection(getNacelleConfig)