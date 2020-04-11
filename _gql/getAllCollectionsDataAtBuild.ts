const GET_ALL_COLLECTIONS = `
{
  getCollections(first: 100) {
    items {
      handle,
      globalHandle
      title
      description
      productLists{
        handles
      }
    }
  }
}
`

export default GET_ALL_COLLECTIONS