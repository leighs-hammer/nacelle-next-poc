import React from 'react'

const Logo = ({fill, width}) => {

  return (
    <React.Fragment>
      <svg width={width} height={width} viewBox="0 0 1024 1024" version="1.1">
        <g id="Export" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path 
              d="M512,94 L804,678 L729.29885,678 L512,242.968925 L325.783429,622.247177 L374.377,622.247 L512,347 L804,931 L729.29885,931 L602.925,678 L422.627,678 L325.783429,875.247177 L674.253681,875.247177 L674.253681,931 L220,931 L346.5,678 L220,678 L512,94 Z M575.076,622.247 L512,495.968925 L450,622.247 L575.076,622.247 Z" 
              id="Combined-Shape" 
              fill={fill}></path>
        </g>
      </svg>
    </React.Fragment>
  )
}

export default Logo