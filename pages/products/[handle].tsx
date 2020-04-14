import React from 'react'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import GET_ALL_PRODUCTS from '../../_gql/getAllProductDataAtBuild';
import Stage from '../../components/Stage'
import fetch from 'isomorphic-unfetch'
import BUILD_FILES from '../../_constants/buildFilePaths';
import ProductGallery from '../../components/Product/ProductGallery';
import { THEME_CONTAINER_WIDTH } from '../../_constants/theme';
import ProductForm from '../../components/Product/ProductForm';
import ProductTitle from '../../components/Product/ProductTitle';
import nacelleHighWarpLoader from '../../_nacelle/nacelleHighWarpLoader';

export interface ProductProps {
  product: any // lazy but until fleshed out I will need to define this later.
}
 
const Product: React.SFC<ProductProps> = ({product}) => {

  const router = useRouter()
  
  if (router.isFallback || !product) {
    return <div>Loading...</div>
  }

  return ( 
    <Stage title={product && product.title? product.title : 'NOT FOUND'} navigation={{}}>
      <div className='Product'>
        <div className="container">
          <ProductGallery image={product.featuredMedia} media={product.media} />
          
          <div className="ProductInfo">
            <ProductTitle title={product.title} />
            <ProductForm />
            <pre>{JSON.stringify(product, null, 2)}</pre>
          </div>

        </div>
        <style jsx>{`
          .Product {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 16px;
          }
          .container {
            display: flex;
            max-width: ${THEME_CONTAINER_WIDTH};
          }
        `}</style>
      </div>
    </Stage>
  )
}


export const getStaticPaths = async () => {
  
  const {productPaths} = await nacelleHighWarpLoader('productPaths')

  return {
    paths: productPaths,
    fallback: true,
  }
}

// Static Request
export const getStaticProps = async ({params}) => {

  const {handle} = params
  
  // local static file
  //  kept singlular for the POC
  const productFile = await nacelleHighWarpLoader('products')
  const product = productFile.items.find(item => item.handle === handle)

  return {
    props: {
      productLoadedStatic: !product,
      product,
    }
  }
}
 
export default Product;