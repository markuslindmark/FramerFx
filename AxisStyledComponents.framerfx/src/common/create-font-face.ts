export const fontFamily = 'Open Sans';

export const createFontFace = (fontBaseUrl: string) => ([
    {
        fontFamily: fontFamily,
        fontWeight: 400,
        //src: `local('${fontFamily}'), url(${fontBaseUrl}OpenSans-Regular.ttf) format('truetype')`,
        src: `url(${fontBaseUrl}OpenSans-Regular.ttf) format('truetype')`,
    },
    {
        fontFamily: fontFamily,
        fontWeight: 600,
        src: `url(${fontBaseUrl}OpenSans-Semibold.ttf) format('truetype')`,
    },
    {
        fontFamily: fontFamily,
        fontWeight: 700,
        src: `url(${fontBaseUrl}OpenSans-Bold.ttf) format('truetype')`,
    }
]);
