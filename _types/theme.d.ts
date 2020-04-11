export type TThemeKey = string | 'dark' | 'light'

export interface IFuseTheme {
  themeKey: TThemeKey,
  toggleTheme: () => React.Dispatch<React.SetStateAction<string>> | any,
  colors: Colorset,
}

export type Colorkey = string | 'dark' | 'light'

export interface Colorset {
  bkg: string,
  dark: string,
  text: string,
  accent: string,
}
