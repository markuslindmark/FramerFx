import { StyleRules } from '@material-ui/core/styles/withStyles';
import { ComponentNameToClassKey } from '@material-ui/core/styles/overrides';

export type CreateMuiButtonColorOptions = {
    defaultTextColor: string;
    activeTextColor: string;
    activeBackground: string;
    activeContainedBackground: string;
    activeContainedBorder: string;
    activeBorderColor: string;
    focusBorderColor?: string;
    focusBackground?: string;
}

export type CreateMuiButtonOptions = {
    default: CreateMuiButtonColorOptions & {
        // Bug fix: disabled outlined secondary border has incorrect alpha
        outlinedDisabledBorder?: string;
    };
    primary: CreateMuiButtonColorOptions & {
        // Bug fix: disabled outlined secondary border has incorrect alpha
        outlinedDisabledBorder?: string;
    };
    secondary: CreateMuiButtonColorOptions & {
        // Bug fix: disabled outlined secondary border has incorrect alpha
        outlinedDisabledBorder?: string;
    };
}

export const createMuiButton = (options: CreateMuiButtonOptions): Partial<StyleRules<ComponentNameToClassKey['MuiButton']>> => ({
    text: {
        color:options.default.defaultTextColor,
        border: '2px solid transparent',
        "&:hover": {
            color:options.default.activeTextColor,
        },
        "&.Mui-focusVisible": {
            color:options.default.activeTextColor,
            backgroundColor: options.default.activeBackground,
            borderColor:options.default.focusBorderColor,
        },
        '&:active': {
            backgroundColor: options.default.activeBackground,
        },

    },
    textPrimary: {
        border: '2px solid transparent',
        "&:hover": {
            color:options.primary.activeTextColor,
        },
        "&.Mui-focusVisible": {
            color:options.primary.activeTextColor,
            backgroundColor: options.primary.activeBackground,
            borderColor:options.primary.focusBorderColor,
        },
        '&:active': {
            backgroundColor: options.primary.activeBackground,
        },

    },
    textSecondary: {
        border: '2px solid transparent',
        "&:hover": {
            color:options.secondary.activeTextColor,
        },
        "&.Mui-focusVisible": {
            color:options.secondary.activeTextColor,
            backgroundColor: options.secondary.activeBackground,
            borderColor:options.secondary.focusBorderColor,
        },
        '&:active': {
            backgroundColor: options.secondary.activeBackground,
        },

    },
    contained: {
        border: '2px solid transparent',
        "&.Mui-focusVisible": {
            backgroundColor: options.default.focusBackground,
            borderColor:options.default.activeContainedBorder,
        },
        '&:active': {
            backgroundColor: options.default.activeContainedBackground,
        },
    },
    containedPrimary: {
        border: '2px solid transparent',
        "&.Mui-focusVisible": {
            backgroundColor: options.primary.activeContainedBackground,
            borderColor: options.primary.activeContainedBorder,
        },
        '&:active': {
            backgroundColor: options.primary.activeContainedBackground,
        },

    },
    containedSecondary: {
        border: '2px solid transparent',
        "&.Mui-focusVisible": {
            backgroundColor: options.secondary.activeContainedBackground,
            borderColor: options.secondary.activeContainedBorder,
        },
        '&:active': {
            backgroundColor: options.secondary.activeContainedBackground,

        },

    },
    outlined: {
        color:options.default.defaultTextColor,
        '&:hover': {
            color:options.default.activeTextColor,
            //boxShadow: `inset 0 0 0 1px ${options.default.focusBorderColor}`,
            '&:disabled': {
                borderColor: options.default.outlinedDisabledBorder,
                boxShadow: `inset 0 0 0 1px transparent`,
            }
        },
        "&.Mui-focusVisible": {
            color:options.default.activeTextColor,
            borderColor:options.default.focusBorderColor,
            boxShadow:`0 0 0 1px ${options.default.focusBorderColor}`,
            backgroundColor: options.default.activeBackground,
        },
        '&:active': {
            backgroundColor: options.default.activeBackground,
            borderColor:options.default.activeBorderColor,
            //boxShadow:`inset 0 0 0 1px ${options.default.activeBorderColor}`,
        },
        '&:disabled': {
            borderColor: options.default.outlinedDisabledBorder,
        }
    },
    outlinedPrimary: {
        color:options.default.defaultTextColor,
        '&:hover': {
            color:options.default.activeTextColor,
            //boxShadow: `inset 0 0 0 1px ${options.primary.focusBorderColor}`,
            '&:disabled': {
                borderColor: options.primary.outlinedDisabledBorder,
                boxShadow: `inset 0 0 0 1px transparent`,
            }
        },
        // "&.Mui-focusVisible": {
        //     color: "white",
        //     outline: 'green solid 3px',
        //   },
        "&.Mui-focusVisible": {
            color:options.default.activeTextColor,
            borderColor:options.primary.focusBorderColor,
            boxShadow:`0 0 0 1px ${options.primary.focusBorderColor}`,
            backgroundColor: options.primary.activeBackground,
        },

        '&:active': {
            backgroundColor: options.primary.activeBackground,
            borderColor:options.primary.activeBorderColor,
            //boxShadow:`inset 0 0 0 1px ${options.primary.activeBorderColor}`,
        },
        '&:disabled': {
            borderColor: options.primary.outlinedDisabledBorder,
        }
    },
    outlinedSecondary: {
        color:options.default.defaultTextColor,
        '&:hover': {
            color:options.default.activeTextColor,
            //boxShadow: `inset 0 0 0 1px ${options.secondary.focusBorderColor}`,
            '&:disabled': {
                borderColor: options.secondary.outlinedDisabledBorder,
                boxShadow: `inset 0 0 0 1px transparent`,
            }
        },
        "&.Mui-focusVisible": {
            color:options.default.activeTextColor,
            borderColor:options.secondary.focusBorderColor,
            boxShadow:`0 0 0 1px ${options.secondary.focusBorderColor}`,
            backgroundColor: options.secondary.activeBackground,
        },
        '&:active': {
            backgroundColor: options.secondary.activeBackground,
            borderColor:options.secondary.activeBorderColor,
            //boxShadow:`inset 0 0 0 1px ${options.secondary.activeBorderColor}`,
        },

        // Bug fix: disabled outlined secondary border has incorrect alpha
        '&:disabled': {
            borderColor: options.secondary.outlinedDisabledBorder,
        }
    },
});