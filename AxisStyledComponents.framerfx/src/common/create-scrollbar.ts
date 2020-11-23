import { CSSProperties } from '@material-ui/styles';

export type CreateScrollbarOptions = {
    background: string;
    thumb: string;
}

export const createScrollbar = (options: CreateScrollbarOptions): Record<string, CSSProperties> => ({
    '*::-webkit-scrollbar': {
        width: '0.5em',
        height: '0.5em',
    },
    '*::-webkit-scrollbar-track': {
        backgroundColor: options.background,
    },
    '*::-webkit-scrollbar-track-piece': {
        backgroundColor: options.background,
    },
    '*::-webkit-scrollbar-thumb': {
        height: 50,
        backgroundColor: options.thumb,
        borderRadius: 3,
    },
    '*::-webkit-scrollbar-corner': {
        backgroundColor: options.background,
    },
    '*': {
        'scrollbar-color': `${options.thumb} ${options.background}`,
    },
});