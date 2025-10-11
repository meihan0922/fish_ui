import { teamsLightTheme } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

const theme = teamsLightTheme;

const useClasses = makeStyles({
    propGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: '1fr',
        rowGap: '10px',
        columnGap: '10px',
        fontFamily: theme.fontFamilyBase,
        alignContent: 'center',
        alignItems: 'center',
    },
});

export const FontFamily = () => {
    const classes = useClasses();
    return (
        <div className={classes.propGrid}>
            {Object.keys(theme)
                .filter(key => key.startsWith('fontFamily'))
                .map(fontFamily => {
                    return [
                        <div key={fontFamily}>{fontFamily}</div>,
                        <div
                            key={`${fontFamily}-value`}
                            style={{
                                fontFamily: `${theme[fontFamily as keyof typeof theme]}`,
                            }}
                        >
                            {theme[fontFamily as keyof typeof theme]}
                        </div>,
                    ];
                })}
        </div>
    );
};

export const FontSize = () => {
    const classes = useClasses();
    return (
        <div className={classes.propGrid}>
            {Object.keys(theme)
                .filter(key => key.startsWith('fontSize'))
                .map(fontSize => {
                    return [
                        <div key={fontSize}>{fontSize}</div>,
                        <div
                            key={`${fontSize}-value`}
                            style={{
                                fontSize: `${theme[fontSize as keyof typeof theme]}`,
                            }}
                        >
                            {theme[fontSize as keyof typeof theme]}
                        </div>,
                    ];
                })}
        </div>
    );
};

export const FontWeight = () => {
    const classes = useClasses();
    return (
        <div className={classes.propGrid}>
            {Object.keys(theme)
                .filter(key => key.startsWith('fontWeight'))
                .map(fontWeight => {
                    return [
                        <div key={fontWeight}>{fontWeight}</div>,
                        <div
                            key={`${fontWeight}-value`}
                            style={{
                                fontWeight: `${theme[fontWeight as keyof typeof theme]}`,
                            }}
                        >
                            {theme[fontWeight as keyof typeof theme]}
                        </div>,
                    ];
                })}
        </div>
    );
};
export const LineHeight = () => {
    const classes = useClasses();
    return (
        <div className={classes.propGrid}>
            {Object.keys(theme)
                .filter(key => key.startsWith('lineHeight'))
                .map(lineHeight => {
                    return [
                        <div key={lineHeight}>{lineHeight}</div>,
                        <div
                            key={`${lineHeight}-value`}
                            style={{
                                lineHeight: `${theme[lineHeight as keyof typeof theme]}`,
                            }}
                        >
                            {theme[lineHeight as keyof typeof theme]}
                        </div>,
                    ];
                })}
        </div>
    );
};

export default {
    title: '主題/Fonts',
    parameters: {
        docs: {
            canvas: {
                sourceState: 'none',
                withToolbar: false,
            },
        },
    },
};
