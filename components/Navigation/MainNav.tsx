import React, { useEffect } from 'react'
import hexToRgba from 'hex-to-rgba'
import { useNavigation } from '../../hooks/useNavigation';
import { useTheme } from '../../hooks/useTheme'
import { THEME_CONTAINER_WIDTH } from '../../_constants/theme';
import { Close } from './Hamburger';

const MainNav = ({navigation}) => {

  const {colors} = useTheme()
  const {nav, navOpen, setNav, toggleOpen} = useNavigation()

  useEffect(() => {

    if(nav.init && !nav.id) {
      setNav(navigation)
    }

  }, [])

  if(!nav.data && nav.init) {return null}

  return (
    <div className={`NavigationWrapper ${navOpen? 'slideIn' : 'slideOut'}`}>

      <div className="navigationHeading" >
      
        <h2>Navigation</h2>

        <div className="closeWrapper" onClick={() => toggleOpen()}>
          <Close fill={colors.text} />
        </div>
      
      </div>
      
      <div className="container">

      </div>

     {/* <pre>{JSON.stringify(nav.data.nav, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(nav, null, 2)}</pre> */}

      <style jsx>{`
        .NavigationWrapper {
          position: fixed;
          z-index: 50;
          width: 100%;
          height: 0px;
          overflow: hidden;
          background-color: ${hexToRgba(colors.bkg, 1)};
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }

        .navigationHeading {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column-reverse;
        }
        .closeWrapper {
          margin-bottom: 16px;
          opacity: 0.6;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        .closeWrapper:hover {
          opacity: 1;
        }
        .container {
          display: flex;
          max-width: ${THEME_CONTAINER_WIDTH};
          padding: 16px;
          justify-content: center;
          align-items: flex-start;
        }

        .slideIn {
          height: calc(100vh - 54px);
          animation: slideIn 0.4s;
        } 

        .slideOut {
          animation: slideOut 0.3s;
        }

        @keyframes slideIn {
          0% {
            top: -100vh;
          }
          100% {
            top: 54px;
            opacity: 1;
          }
        }
        @keyframes slideOut {
          0% {
            opacity: 1;
          }
          100% {
           opacity: 0;
          }
        }

      `}</style>
    </div>
  )
}

export default MainNav