import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import THEME_COLORS from '../../_constants/theme'
import { Colorset } from '../../_types/theme'

const ThemeToggle = () => {

  const {themeKey, toggleTheme} = useTheme()
  const altColorSet:Colorset = THEME_COLORS[themeKey === 'light' ? 'dark' : 'light']

  return (
    <div className="toggleWrapper">
      <span className={`toggleLabel ${themeKey === 'dark' ? 'active' : ''}`}>dark</span>

      <div className="ToggleContainer" onClick={() => toggleTheme()}>
        <span className="ToggleCircle"></span>
      </div>
      
      <span className={`toggleLabel ${themeKey === 'light' ? 'active' : ''}`}>light</span>

      <style jsx>{`
        .ToggleContainer {
          width: 40px;
          max-width: 70px;
          height: 20px;
          padding: 2px;
          border-radius: 35px;
          display: flex;
          justify-content: ${themeKey === 'dark' ? 'flex-start' : 'flex-end'};
          align-items: center;
          background-color: ${altColorSet.bkg};
          cursor: pointer;
          border: 1px solid ${THEME_COLORS['dark'].text};
          transition: all 0.3s ease;
        }

        .ToggleCircle {
          width: 18px;
          height: 18px;
          display: block;
          border-radius: 50%;
          background-color: ${altColorSet.text};
        }

        .toggleWrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .toggleLabel {
          font-weight: 300;
          font-size: 13px;
          opacity: 0.6;
          margin: 6px;
          transition: all 0.3s ease;
        }
        .toggleLabel.active {
          opacity: 1;
        }

      `}</style>
    </div>
  )
}

export default ThemeToggle