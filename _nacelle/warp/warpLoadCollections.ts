import GET_ALL_PRODUCTS from "../../_gql/getAllProductDataAtBuild"
import fetch from 'isomorphic-unfetch';
import BUILD_FILES from '../../_constants/buildFilePaths';
import fs from 'fs'
import path from 'path'
import GET_ALL_COLLECTIONS from '../../_gql/getAllCollectionsDataAtBuild';

const warpLoadCollections = async (headers) => {

  // Possibly split this down in the future.
  const allCollections = await (await fetch(process.env.NACELLE_ENDPOINT, {
    
    method: 'POST',
    headers: headers,
    body: JSON.stringify({query: GET_ALL_COLLECTIONS})
  })).json()

  // Array of params for get Static Props
  const collectionPaths = allCollections.data.getCollections.items.map((item) => ({ params: {handle: item.handle}}))
  // lets write a local file on build so we dont have to request stuff 300 times.
  fs.writeFileSync(path.resolve(BUILD_FILES.COLLECTIONS), JSON.stringify({ items : allCollections.data.getCollections.items}))
  fs.writeFileSync(path.resolve(BUILD_FILES.COLLECTION_PATHS), JSON.stringify({ collectionPaths }))
  console.log('WARPLOAD: // Collections and Paths written')

}

export default warpLoadCollections