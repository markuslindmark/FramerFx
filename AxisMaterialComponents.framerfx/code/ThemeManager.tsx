import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useStore } from './storeCreator';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { themeDark as axisThemeDark } from 'framerstyle';
import { themeLight as axisThemeLight } from 'framerstyle';

const themeDark = createMuiTheme({
  ...axisThemeDark,
  palette: {
    ...axisThemeDark.palette,
  },
  typography: {
    ...axisThemeDark.typography,
  },
});

const themeLight = createMuiTheme({
  ...axisThemeDark,
  palette: {
    ...axisThemeLight.palette,
  },
  typography: {
    ...axisThemeLight.typography,
  },
});

export const ThemeManager = (props) => {
  const [store] = useStore();
  return (
    <MuiThemeProvider theme={store.darktheme ? themeDark : themeLight}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};
