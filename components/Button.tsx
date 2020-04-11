import React from 'react'
import { useTheme } from '../hooks/useTheme';
import Link from 'next/link';

interface IFButton {
  text: string,
  url: string,
  accented?: boolean,
  subdued?: boolean,
}

const Button: React.FC<IFButton> = ({text, url, accented, subdued}) => {

  const {themeKey,colors} = useTheme()

  const bkg = () => {
    if(accented) {
      return colors.accent
    }
    return 'transparent'
  }

  const TextColor = accented && themeKey === 'light' ? colors.bkg : colors.text
  const borderColor = accented ? colors.accent : colors.text
 
  const externalLink = url.includes('https://') 


  return (
    <React.Fragment>
      {externalLink && 
        <a href={url}>
         <button className="btn">{text}</button>
        </a>
      }

      {!externalLink &&
        <Link href={url}>
          <button className="btn">{text}</button>
        </Link>
      }

      <style jsx>{`
        .btn {
          padding-top: 8px;
          padding-bottom: 8px;
          padding-left: 16px;
          padding-right: 16px;
          margin: 4px;
          border: 1px solid ${subdued ? 'transparent' : borderColor};
          color: ${TextColor};
          background-color: ${bkg()};
          cursor: pointer;
          font-size: 16px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .btn:hover {
          background-color: ${colors.text};
          color: ${colors.bkg};
          border-color: ${colors.text};
        }
      `}</style>
    </React.Fragment>
  )
}

export default Button