import { StyleRules } from '@material-ui/core/styles/withStyles';
import { ComponentNameToClassKey } from '@material-ui/core/styles/overrides';

export type CreateMuiInputBaseOptions = {
    color: string;
    baseColor: string;
}

export type CreateMuiInputLabelOptions = {
    color: string;
}

export type CreateMuiOutlinedInputOptions = {
    color: string;
    baseColor: string;
}

export type CreateMuiInputAdornmentOptions = {
    color: string;
    baseColor: string;
}

export type CreateMuiInputOptions = {
    base: CreateMuiInputBaseOptions;
    outlined: CreateMuiOutlinedInputOptions;
    label: CreateMuiInputLabelOptions;
    adornment: CreateMuiInputAdornmentOptions;
}

export const createMuiInputBase = (options: CreateMuiInputBaseOptions): Partial<StyleRules<ComponentNameToClassKey['MuiInputBase']>> => ({

    adornedEnd: {
        color: options.baseColor,
        '&.Mui-focused': {color: options.color},
    },

    input: {
        color: options.color,
        '&:focus': {
            color: options.color,
        }
    },
    root:{
        '&.Mui-disabled': {
        opacity:0.5
    }}

});

export const createMuiOutlinedInput = (options: CreateMuiOutlinedInputOptions): Partial<StyleRules<ComponentNameToClassKey['MuiOutlinedInput']>> => ({
    adornedEnd: {
        color: options.baseColor,
        '&.Mui-focused': {color: options.color},
    },
    input: {
        color: options.color,
        '&:focus': {
            color: options.color,
        },
    },

    focused: {

    },
    root:{
        '&.Mui-disabled': {
        opacity:0.5
    }}
});

export const createMuiInputLabel = (options: CreateMuiInputLabelOptions): Partial<StyleRules<ComponentNameToClassKey['MuiInputLabel']>> => ({
    root: {
        //color: options.color,
    },
});

export const createMuiInputAdornment = (options: CreateMuiInputAdornmentOptions): Partial<StyleRules<ComponentNameToClassKey['MuiInputAdornment']>> => ({
    // root: {
    //     color: options.baseColor,
    //     '&:focus': {
    //         color: options.color,
    //     }
    // },
    // focused: {

    // }
});