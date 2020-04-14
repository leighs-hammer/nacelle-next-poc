import React from 'react'
import { imageSize, getSizedImageUrl } from '../../_utils/imageSizes';

interface IFMediaObject {
  id: string
  type: 'image' | 'video' | 'model' // More exist @todo define
  src: string
  altText: string
}

interface IFProductGallery {
  image: IFMediaObject,
  media: IFMediaObject[]
}

const ProductGallery: React.FC<IFProductGallery> = ({image, media}) => {

  return (
    <div className="ProductGallery">
      <div className='MainImage'>
        <img src={image.src} alt={image.altText}/>
      </div>
      <ul className="Thumbnails">
          {media.map((image, index) => {
            return (
              <li key={`product-thumbnail-${index}-${image.id}`} className="Thumbnail">
                <img 
                  src={getSizedImageUrl(image.src, '100x100')} 
                  alt={image.altText} 
                />
              </li>
            )
          })}
          <style jsx>{`
            .Thumbnails {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .Thumbnail {
              padding: 8px;
              margin: 8px;
              background-color: #fff;
            }

          `}</style>
      </ul>
    </div>
  )

}

export default ProductGallery