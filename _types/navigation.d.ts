export interface IFNavigationProvider {
  children: React.ReactChildren | React.ReactElement,
}

export interface IFNavigationContext {
  nav: any
  navOpen: boolean, 
  toggleOpen: () => React.Dispatch<React.SetStateAction<string>> | any,
  setNav: any,
}

export type TuseNavigation = () => IFNavigationContext
