import '@blocknote/react/style.css';
import { darkDefaultTheme, lightDefaultTheme, Theme } from '@blocknote/react';

// const componentStyles = (theme: Theme) => ({
//   Editor: {
//     '[data-node-type="blockContainer"] *': {
//       fontFamily: 'NotoSansKR',
//     },
//   },
// });

// Combining the custom themes into a single theme object.
const editorTheme = {
  light: {
    ...lightDefaultTheme,
    // componentStyles,
  },
  dark: {
    ...darkDefaultTheme,
    // componentStyles,
  },
} satisfies {
  light: Theme;
  dark: Theme;
};

export default editorTheme;
