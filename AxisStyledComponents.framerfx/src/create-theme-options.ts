import { PaletteType, ThemeOptions } from '@material-ui/core';
import { createLightThemeOptions } from './theme/light';
import { createDarkThemeOptions } from './theme/dark';

export type CreateThemeOptions = {
    type?: PaletteType;
    fontBaseUrl?: string;
};

export const createThemeOptions = (options: CreateThemeOptions): ThemeOptions =>

    options.type === 'light'
        ? createLightThemeOptions(options.fontBaseUrl ?? '')
        : createDarkThemeOptions(options.fontBaseUrl ?? '');

