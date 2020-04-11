import { Colorkey, Colorset } from '../_types/theme';

const THEME_COLORS: Record<Colorkey, Colorset> = {
  dark: {
    bkg: '#282c34',
    dark: '#1A1D22',
    text: '#f4f6f8',
    accent: '#E34934',
  },
  light: {
    bkg: '#f4f6f8',
    dark: '#DFDFE8',
    text: '#282c34',
    accent: '#E34934',
  }
}

export default THEME_COLORS

export const THEME_CONTAINER_WIDTH = '1400px'