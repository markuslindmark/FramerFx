import { PaletteType, ThemeOptions} from '@material-ui/core';
import { TypeBackground, TypeText } from '@material-ui/core/styles/createPalette';
import { yellow, red, blue, green } from '../common/colors';
import { fontFamily, createFontFace } from '../common/create-font-face';
import { CreateScrollbarOptions, createScrollbar } from '../common/create-scrollbar';
import { createMuiButton, CreateMuiButtonOptions } from '../common/create-mui-button';
import {
    createMuiInputBase,
    createMuiInputLabel,
    CreateMuiInputOptions,
    createMuiOutlinedInput,
    createMuiInputAdornment
} from '../common/create-mui-input';

export type CreateBaseThemeOptions = {
    fontBaseUrl: string;
    scrollbar: CreateScrollbarOptions;
    button: CreateMuiButtonOptions;
    input: CreateMuiInputOptions;
    palette: {
        type: PaletteType;
        background: TypeBackground;
        divider: string;
        text?: Partial<TypeText>;
    };
}

export const createBaseThemeOptions = (options: CreateBaseThemeOptions): ThemeOptions => ({
    typography: {
        fontFamily,
        h1: {
            fontSize: '1.2rem',
        },
        h2: {
            fontSize: '1rem',
            textTransform: 'uppercase',
        },
        h3: {
            fontSize: '0.8rem',
            textTransform: 'uppercase',
        },
        h4: {
            fontSize: '0.8rem',
        },
        button: {
            fontWeight: 700,
        },
    },
    palette: {
        primary: yellow,
        secondary: blue,
        error: red,
        success: green,
        info: blue,
        tonalOffset: 0.2,
        ...options.palette,
    },
    overrides: {
        // MuiCssBaseline: {
        //     "@global": {
        //       "@font-face": [
        //         {
        //             fontFamily: "Open Sans",
        //             fontWeight:400,
        //           src: 'url(../../code/fonts/OpenSans-Regular.ttf) format("truetype");',
        //             },
        //             {
        //                 fontFamily: "Open Sans",
        //                 fontWeight:600,
        //               src: 'url(../../code/fonts/OpenSans-Semibold.ttf) format("truetype");',
        //             },
        //             {
        //                 fontFamily: "Open Sans",
        //                 fontWeight:700,
        //               src: 'url(../../code/fonts/OpenSans-Bold.ttf) format("truetype");',
        //             },
        //         ]
        //     },
        //   },
        MuiCssBaseline: {
            '@global': {
                '@font-face': createFontFace(options.fontBaseUrl),
                ...createScrollbar(options.scrollbar),
            }
        },
        MuiDivider: {
            root: {
                height: 3,
            },
        },
        MuiButton: createMuiButton(options.button),
        MuiInputLabel: createMuiInputLabel(options.input.label),
        MuiInputBase: createMuiInputBase(options.input.base),
        MuiOutlinedInput: createMuiOutlinedInput(options.input.outlined),
        MuiInputAdornment: createMuiInputAdornment(options.input.adornment)
    },
});
