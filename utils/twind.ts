import { IS_BROWSER } from '$fresh/runtime.ts';
import { Configuration, setup } from 'twind';
import * as colors from 'twind/colors';

export * from 'twind';
export const config: Configuration = {
  theme: {
    colors: {
      gray: colors.gray,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      emerald: colors.emerald,
    },
  },
  darkMode: 'class',
  mode: 'silent',
};

if (IS_BROWSER) setup(config);
