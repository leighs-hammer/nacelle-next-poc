const GET_ALL_PRODUCTS = `
{
  getProducts(first: 400) {
    items {
      id
      handle
      title
      description
      globalHandle
      featuredMedia {
        type
        src
        altText
      }
      media {
        type
        src
        altText
      }
      priceRange {
        min,
        max
      }
      variants {
        id,
        title,
        price,
        priceCurrency
        selectedOptions {
          name
          value
        }
        sku
        availableForSale
      }
      tags 
    }
    nextToken
  }
}
`

export default GET_ALL_PRODUCTS