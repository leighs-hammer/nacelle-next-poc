import React from 'react'
import Stage from '../components/Stage'
import fs from 'fs'
import path from 'path';
import BUILD_FILES from '../_constants/buildFilePaths';

const Products = ({products}) => (
  <Stage title='Home' navigation={{ test: 'value'}}>
    {JSON.stringify(products)}
  </Stage>
)

export const getStaticProps = async () => {
  
  const all = fs.readFileSync(path.resolve(BUILD_FILES.PRODUCTS), 'utf8')
  const products = JSON.parse(all)

  return {
    props: {
      products,
    }
  }
}

export default Products
