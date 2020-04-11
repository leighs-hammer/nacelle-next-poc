import React from 'react'
import THEME_COLORS from '../_constants/theme'
import { useTheme } from '../hooks/useTheme';

const Footer = () => {

  const {themeKey} = useTheme()

  const year = () => {
    const dt = new Date()
    return dt.getUTCFullYear()
  }

  return (
    <React.Fragment>
      <footer className="Footer">
        <div className="container">
          <span className="copyright">©{year()}</span>
        </div>
        <style jsx>{`
          .Footer {
            background-color: ${THEME_COLORS['dark'].dark};
            color:  ${THEME_COLORS['dark'].text};
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 40px;
            padding: 8px;
          }
          .copyright {
            font-size: 14px;
          }
        `}</style>
      </footer>


    </React.Fragment>
  )
}

export default Footer