import fs from 'fs'
import path from 'path'
import BUILD_FILES from '../_constants/buildFilePaths';
import warpLoadProducts from './warp/warpLoadProducts';
import warpLoadCollections from './warp/warpLoadCollections';

/**
 * Function the Loads local files or returns existing build files
 */

  type TWarpTypes = 'products' | 'productPaths' | 'collections' | 'collectionPaths' | 'linkLists'
  type THighWarpLoader = (type: TWarpTypes, runOnEveryRequest?: boolean) => any

  const nacelleHighWarpLoader: THighWarpLoader = async (type, runOnEveryRequest = false) => {

    const CWD = process.cwd()
    const alreadyLoaded = fs.existsSync(BUILD_FILES.HIGH_WARP)

    // No Local Files
    if(!alreadyLoaded || runOnEveryRequest) {
      console.log('WARPLOAD: // Needs to load the files before they can be returned')
      // Headers
      const headers = {
        'x-nacelle-space-id': process.env.NACELLE_ID,
        'x-nacelle-space-token': process.env.NACELLE_TOKEN,
      }
      // Products
      await warpLoadProducts(headers)
      // collections
      await warpLoadCollections(headers)
      // ..... More loaders as required
      
      // ..... More loaders as required
      
      // Write the highwarp file
      // Stops this running multiple times. 
      fs.writeFileSync(path.resolve(BUILD_FILES.HIGH_WARP), JSON.stringify({ loaded: true, createdAt: Date.now() }))
    }

    // Return the requested file
    switch (type) {
      /// Product
      case 'productPaths':
        const productPaths = JSON.parse(fs.readFileSync(path.resolve(BUILD_FILES.PRODUCT_PATHS), 'utf8'))
        return productPaths
      case 'products':
        const products = JSON.parse(fs.readFileSync(path.resolve(BUILD_FILES.PRODUCTS), 'utf8'))
        return products
      /// Collections
      case 'collectionPaths':
        const collectionPaths = JSON.parse(fs.readFileSync(path.resolve(BUILD_FILES.COLLECTION_PATHS), 'utf8'))
        return collectionPaths
      case 'collections':
        const collections = JSON.parse(fs.readFileSync(path.resolve(BUILD_FILES.COLLECTIONS), 'utf8'))
        return collections
      default:
        return console.error('No valid type passed to the warp loader. ')
        break;
    }




    
  }


 export default nacelleHighWarpLoader