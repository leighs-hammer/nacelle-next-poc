// define types here during dev then move to types folder. 

interface IFConfig {
  storeName: string, 
  
}



const CONFIG = {
  // Potential to add i81n here to change these according to locale. 

  storeName: 'Nacelle POC with NextJS',
  // Dynamic path definitions. 
  paths: {
    product: '/products',
    collection: '/collections'
  },

  // move to nacelle link lists
  // When the restriction on get staticProps on _app is lifted
  // this can be linked ot link lists. 
  navigation: [
    
    {
      label: 'Snowboard',
      link: false,
      sublinks: [
        {
          type: 'collection',
          label: 'Snowboards',
          link: '/snowboards',
        },
        {
          type: 'collection',
          label: 'Bindings',
          link: '/snowboard-bindings',
        }
      ]
    },

    {
      label: 'Ski',
      link: false,
      sublinks: [
        {
          type: 'collection',
          label: 'Skis',
          link: '/skis',
        },
        {
          type: 'collection',
          label: 'Bindings',
          link: '/ski-bindings',
        }
      ]
    }
  ],

  nacelleClientConfig : {
    NACELLE_ID:'modern-computer-LalpeAZ3lV',
    NACELLE_TOKEN:'04049a98-ff59-4b14-b34a-cc5926561cd8',
  }


}

export default CONFIG