import { NextApiRequest, NextApiResponse } from 'next';
import { TverificationMiddleware, Thandler } from '../../../_types/verifiedConnections';


const verifiedConnection: TverificationMiddleware = (handler: Thandler) => { 

  return async(req: NextApiRequest, res: NextApiResponse) => {

    if(process.env.NODE_ENV === 'production') {
      
      console.log(req.headers)
      // const cleanBaseOrigin = process.env.APP_URL.replace('https://', '')

      // early respond for malicious & wrong methods of requests
      if(req.method !== 'POST') {
        return res.status(429).json({error: true, message: 'Method not allowed or security check failed'})
      }
    }

    return handler(req, res)
  }
}


export default verifiedConnection