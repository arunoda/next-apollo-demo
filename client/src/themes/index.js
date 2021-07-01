import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiBackdrop: {
      root: {
        zIndex: 100,
      },
    },
  },
});

export default responsiveFontSizes(theme);
