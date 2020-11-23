import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useStore } from './storeCreator';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { createThemeOptions } from '../src/create-theme-options';

// const themeDark = createMuiTheme({
//   ...axisThemeDark,
//   palette: {
//     ...axisThemeDark.palette,
//   },
//   typography: {
//     ...axisThemeDark.typography,
//   },
// });
const themeDark = createMuiTheme(
  createThemeOptions({
    type: 'dark',
    fontBaseUrl: '../../code/fonts/',
  })
);
const themeLight = createMuiTheme(
  createThemeOptions({
    type: 'light',
    fontBaseUrl: '../../code/fonts/',
  })
);

// const themeLight = createMuiTheme({
//   ...axisThemeLight,
//   palette: {
//     ...axisThemeLight.palette,
//   },
//   typography: {
//     ...axisThemeLight.typography,
//   },
// });

export const ThemeManager = (props) => {
  const [store] = useStore();
  return (
    <MuiThemeProvider theme={store.darktheme ? themeDark : themeLight}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};
