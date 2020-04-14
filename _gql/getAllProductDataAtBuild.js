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
        id
        type
        src
        altText
      }
      media {
        id
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
        featuredMedia {
          id
          type
          src
          altText
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

module.exports = GET_ALL_PRODUCTS