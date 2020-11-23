import { ThemeOptions } from '@material-ui/core';

import { createBaseThemeOptions} from './base';
import { blue, grey, white, yellow, black } from '../common/colors';

export const createLightThemeOptions = (fontBaseUrl: string): ThemeOptions => createBaseThemeOptions({
    fontBaseUrl,
    scrollbar: {
        background: white,
        thumb: grey[200]!,
    },
    button: {
        default: {
            defaultTextColor: grey[900],
            activeTextColor: black,
            activeBackground: grey[100]!,
            activeContainedBackground: grey[400]!,
            activeContainedBorder: grey[500]!,
            focusBorderColor: grey[300]!,
            activeBorderColor: grey[400]!,
            focusBackground: grey[200]!,
            outlinedDisabledBorder: 'rgba(0, 0, 0, 0.12)',
        },
        primary: {
            defaultTextColor: black,
            activeTextColor: yellow[500],
            activeBackground: yellow[300]!,
            activeContainedBackground: yellow[500]!,
            activeContainedBorder: yellow[700]!,
            focusBorderColor: yellow[500]!,
            activeBorderColor: yellow[600]!,
            focusBackground: yellow[300]!,
            // Bug fix: disabled outlined secondary border has incorrect alpha
            outlinedDisabledBorder: 'rgba(0, 0, 0, 0.12)',
        },
        secondary: {
            defaultTextColor: black,
            activeTextColor: blue[500],
            activeBackground: blue[300]!,
            activeContainedBackground: blue[500]!,
            activeContainedBorder: blue[700]!,
            focusBorderColor: blue[500]!,
            activeBorderColor: blue[600]!,
            focusBackground: blue[300]!,
            // Bug fix: disabled outlined secondary border has incorrect alpha
            outlinedDisabledBorder: 'rgba(0, 0, 0, 0.12)',
        },
    },
    input: {
        base: {
            color: grey[800]!,
            baseColor: grey[300]!,
        },
        label: {
            color: yellow[800]!,
        },
        outlined: {
            color: grey[800]!,
            baseColor: grey[300]!,
        },
        adornment: {
            color: grey[800]!,
            baseColor: grey[300]!,
        }
    },
    palette: {
        type: 'light',
        background: {
            default: white,
            paper: grey[100]!,
        },
        divider: white,
    },
});
