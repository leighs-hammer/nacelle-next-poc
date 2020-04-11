import React from 'react'
import THEME_COLORS from '../../_constants/theme';
import { useNavigation } from '../../hooks/useNavigation';

interface IFHamburger {}

interface IFSvg {
  fill: string,
}

export const Close: React.FC<IFSvg> = ({fill}) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} width="30px" height="30px"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>)
export const Open: React.FC<IFSvg> = ({fill}) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} width="30px" height="30px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>)

const Hamburger: React.FC<IFHamburger> = ({}) => {
  
  const fillColor = THEME_COLORS['dark'].text

  const {navOpen, toggleOpen} = useNavigation()

  return (
    <div className="Hamburger" onClick={() => toggleOpen()}>
      {navOpen ? (<Close fill={fillColor} />) : (<Open fill={fillColor} />)}
    </div>
  )
}

export default Hamburger