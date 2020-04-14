import React from 'react'

interface IFProductTitle {
  title: string
}

const ProductTitle: React.FC<IFProductTitle> = ({title}) => {
  return (
  <h1>{title}</h1>
  )
}

export default ProductTitle
