import React from 'react'
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './theme/themeToggle';
import Logo from './Logo';
import THEME_COLORS, { THEME_CONTAINER_WIDTH } from '../_constants/theme';
import TopNav from './Navigation/TopNav';
import MainNav from './Navigation/MainNav';
import Link from 'next/link';

const Header = ({nav}) => {
  const {colors} = useTheme()

  return (
    <React.Fragment>

      <header className="header">
        <div className="HeaderContainer">
          <div className="navigation">
            <TopNav />
          </div>
          <div className="LogoWrapper">
            <Link href="/">
              <a>
                <Logo fill={colors.accent} width="42px"/>
              </a>
            </Link>
          </div>
          <div className="ToggleWrapper">
            <ThemeToggle />
          </div>
        </div>
        <style jsx>{`
          .header {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 6px;
            background-color: ${THEME_COLORS['dark'].dark};
            color: ${THEME_COLORS['dark'].text};
            position: sticky;
            z-index: 99;
            top: 0px;
            box-shadow: 4px 4px 12px rgba(0,0,0,0.2);
          }
          .HeaderContainer {
            flex: 1;
            max-width: ${THEME_CONTAINER_WIDTH};
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .navigation {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          .LogoWrapper {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .ToggleWrapper {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          @media screen and (max-width: 767px) {
            .ToggleWrapper {
              display: none;
            }
            .HeaderContainer {
              flex-direction: row-reverse;
            }
            .LogoWrapper {
              justify-content: flex-start;
            }
            .navigation {
              justify-content: flex-end;
            }
          }

        `}</style>
      </header>
      <MainNav navigation={nav}/>
    </React.Fragment>
  )
}

export default Header