import GET_ALL_PRODUCTS from "../../_gql/getAllProductDataAtBuild"
import fetch from 'isomorphic-unfetch';
import BUILD_FILES from '../../_constants/buildFilePaths';
import fs from 'fs'
import path from 'path'

const warpLoadProducts = async (headers) => {

  // Possibly split this down in the future.
  const allProducts = await (await fetch(process.env.NACELLE_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify({query: GET_ALL_PRODUCTS})
  })).json()

  // Array of params for get Static Props
  const productPaths = allProducts.data.getProducts.items.map((item) => ({ params: {handle: item.handle}}))

  // lets write a local file on build so we dont have to request stuff 300 times.
  fs.writeFileSync(path.resolve(BUILD_FILES.PRODUCTS), JSON.stringify({ items : allProducts.data.getProducts.items}))
  fs.writeFileSync(path.resolve(BUILD_FILES.PRODUCT_PATHS), JSON.stringify({ productPaths }))
  console.log('WARPLOAD: // Product data and paths written to local.')
}

export default warpLoadProducts