import React from 'react'
import Hamburger from './Hamburger'
import Link from 'next/link'
import { useTheme } from '../../hooks/useTheme';
import THEME_COLORS from '../../_constants/theme';

const TopNav = () => {

  const {colors} = useTheme()

  return (
    <div className="TopNav">
      
      <div className="hamburgerWrapper">
        <Hamburger />
      </div>
      
      <ul>
        <li>
          <Link href="/products">
            <a>
              Products
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Collections">
            <a>
              Collections
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>
              Contact
            </a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .TopNav {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        ul {
          display: flex;
        }
        li {
          margin-left: 6px;
          margin-right: 6px;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        li:hover {
          opacity: 1;
        }
        a {
          color: ${THEME_COLORS['dark'].text};
          text-decoration: none;
        }
        a:hover {
          color: ${colors.accent};
        }
        .hamburgerWrapper {
          cursor: pointer;
        }

        @media screen and (max-width: 767px) { 
          .TopNav {
            flex-direction: row-reverse;
          }
        }
      `}</style>
    </div>
  )
}

export default TopNav