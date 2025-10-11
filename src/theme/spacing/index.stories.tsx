import { teamsLightTheme } from '@fluentui/react-theme';

const theme = teamsLightTheme;

const SpacingHorizontal = () => {
    return (
        <div
            style={{
                display: 'grid',
                gap: '10px',
                gridTemplateColumns: 'auto auto 1fr',
                alignItems: 'center',
            }}
        >
            {Object.keys(theme)
                .filter(tokenName => tokenName.startsWith('spacingHorizontal'))
                .map(spacingName => {
                    return [
                        <div key={spacingName}>{spacingName}</div>,
                        <div key={`${spacingName}-value`}>
                            {theme[spacingName as keyof typeof theme]}
                        </div>,
                        <div
                            key={`${spacingName}-demo`}
                            style={{
                                width: theme[spacingName as keyof typeof theme],
                                height: '2em',
                                backgroundColor: '#CC6A00',
                            }}
                        />,
                    ];
                })}
        </div>
    );
};

const SpacingVertical = () => {
    return (
        <div
            style={{
                display: 'grid',
                gap: '10px',
                gridTemplateColumns: 'auto auto 1fr',
                alignItems: 'center',
            }}
        >
            {Object.keys(theme)
                .filter(tokenName => tokenName.startsWith('spacingVertical'))
                .map(spacingName => {
                    return [
                        <div key={spacingName}>{spacingName}</div>,
                        <div key={`${spacingName}-value`}>
                            {theme[spacingName as keyof typeof theme]}
                        </div>,
                        <div
                            key={`${spacingName}-demo`}
                            style={{
                                height: theme[
                                    spacingName as keyof typeof theme
                                ],
                                width: '20em',
                                backgroundColor: '#00CC6A',
                            }}
                        />,
                    ];
                })}
        </div>
    );
};

export const Spacing = () => {
    return (
        <>
            <h2>Spacing Horizontal</h2>
            <SpacingHorizontal />
            <h2>Spacing Vertical</h2>
            <SpacingVertical />
        </>
    );
};

export default {
    title: '主題/Spacing',
    parameters: {
        docs: {
            canvas: {
                sourceState: 'none',
                withToolbar: false,
            },
        },
    },
};
