import React from 'react'
import fs from 'fs'
import path from 'path'
import GET_ALL_PRODUCTS from '../../_gql/getAllProductDataAtBuild';
import Stage from '../../components/Stage'
import fetch from 'isomorphic-unfetch'
import BUILD_FILES from '../../_constants/buildFilePaths';

export interface ProductProps {
  product: any // lazy but until fleshed out I will need to define this later.
}
 
const Product: React.SFC<ProductProps> = ({product}) => {

  return ( 
    <Stage title={product && product.title? product.title : 'NOT FOUND'} navigation={{}}>
      <div className='Product'>
        {JSON.stringify(product)}
      </div>
    </Stage>
  )
}


// POC
export const getStaticPaths = async () => {

  const body = {
    query: GET_ALL_PRODUCTS
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
  const paths = all.data.getProducts.items.map((item) => ({ params: {handle: item.handle}}))
  
  // lets write a local file on build so we dont have to request stuff 300 times.
  fs.writeFileSync(path.resolve(BUILD_FILES.PRODUCTS), JSON.stringify({ items : all.data.getProducts.items}))

  return {
    paths: paths,
    fallback: true,
  }
}

// Static Request
export const getStaticProps = async ({params}) => {
  const {handle} = params
  const buildFile = JSON.parse(fs.readFileSync(path.resolve(BUILD_FILES.PRODUCTS), 'utf8'))
  const product = buildFile.items.find(item => item.handle === handle)

  return {
    props: {
      productLoadedStatic: !product,
      product,
    }
  }
}
 
export default Product;