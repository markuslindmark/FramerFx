import { ThemeOptions } from '@material-ui/core';

import { createBaseThemeOptions } from './base';
import { black, blue, grey, yellow,white } from '../common/colors';

export const createDarkThemeOptions = (fontBaseUrl: string): ThemeOptions => createBaseThemeOptions({
    fontBaseUrl,
    scrollbar: {
        background: black,
        thumb: grey[500]!,
    },
    button: {
        default: {
            defaultTextColor: grey[100],
            activeTextColor: white,
            activeBackground: grey[700]!,
            activeContainedBackground: grey[500]!,
            activeContainedBorder: grey[200]!,
            focusBorderColor: grey[300]!,
            activeBorderColor: grey[200]!,
            focusBackground: grey[400]!,
            outlinedDisabledBorder: 'rgba(255,255,255,0.12)',
        },
        primary: {
            defaultTextColor: grey[100],
            activeTextColor: yellow[500],
            activeBackground: yellow[900]!,
            activeContainedBackground: yellow[800]!,
            activeContainedBorder: yellow[500]!,
            focusBorderColor: yellow[500]!,
            activeBorderColor: yellow[400]!,
            focusBackground: yellow[700]!,
            outlinedDisabledBorder: 'rgba(255,255,255,0.12)',
        },
        secondary: {
            defaultTextColor: grey[100],
            activeTextColor: blue[500],
            activeBackground: blue[800]!,
            activeContainedBackground: blue[700]!,
            activeContainedBorder: blue[500]!,
            focusBorderColor: blue[500]!,
            activeBorderColor: blue[400]!,
            focusBackground: blue[700]!,
            // Bug fix: disabled outlined secondary border has incorrect alpha
            outlinedDisabledBorder: 'rgba(255,255,255,0.12)',
        },
    },
    input: {
        base: {
            color: grey[100]!,
            baseColor: grey[200]!,
        },
        label: {
            color: yellow[500]!,
        },
        outlined: {
            color: grey[100]!,
            baseColor: grey[300]!,
        },
        adornment: {
            color: grey[800]!,
            baseColor: grey[300]!,
        }
    },
    palette: {
        type: 'dark',
        background: {
            default: black,
            paper: grey[800]!,
        },
        divider: black,
    },
});
