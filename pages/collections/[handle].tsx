import React from 'react'
import fs from 'fs'
import path from 'path'
import Stage from '../../components/Stage'
import fetch from 'isomorphic-unfetch'
import BUILD_FILES from '../../_constants/buildFilePaths';
import GET_ALL_COLLECTIONS from '../../_gql/getAllCollectionsDataAtBuild';

export interface ProductProps {
  collection: any // lazy but until fleshed out I will need to define this later.
}
 
const Product: React.SFC<ProductProps> = ({collection}) => {

  return ( 
    <Stage title={collection && collection.title? collection.title : 'NOT FOUND'} navigation={{}}>
      <div className='Product'>
        <div>
          <h1>{collection && collection.title}</h1>
        </div>
        {JSON.stringify(collection)}
      </div>
    </Stage>
  )
}


// POC
export const getStaticPaths = async () => {

  const body = {
    query: GET_ALL_COLLECTIONS
  }

  // @todo move to util
  const all = await (await fetch(process.env.NACELLE_ENDPOINT, {
    
    method: 'POST',
    headers: {
      'x-nacelle-space-id': process.env.NACELLE_ID,
      'x-nacelle-space-token': process.env.NACELLE_TOKEN,
    },
    body: JSON.stringify(body)
  })).json()

  // Array of params for get Static Props
  const paths = all.data.getCollections.items.map((item) => ({ params: {handle: item.handle}}))
  
  // lets write a local file on build so we dont have to request stuff 300 times.
  fs.writeFileSync(path.resolve(BUILD_FILES.COLLECTIONS), JSON.stringify({ items : all.data.getCollections.items}))

  return {
    paths,
    fallback: true,
  }
}

// Static Request
export const getStaticProps = async ({params}) => {

  const {handle} = params
  const buildFile = JSON.parse(fs.readFileSync(path.resolve(BUILD_FILES.COLLECTIONS), 'utf8'))
  const collection = buildFile.items.find(item => item.handle === handle)

  return {
    props: {
      productLoadedStatic: !collection,
      collection,
    }
  }
}
 
export default Product;