import { teamsLightTheme } from '@fluentui/react-theme';

const theme = teamsLightTheme;

export const StrokeWidths = () => {
    return (
        <div
            style={{
                display: 'grid',
                gap: '10px',
                gridTemplateColumns: 'auto 1fr',
                alignItems: 'center',
            }}
        >
            {Object.keys(theme)
                .filter(tokenName => tokenName.startsWith('strokeWidth'))
                .map(strokeWidth => {
                    return [
                        <div key={strokeWidth}>{strokeWidth}</div>,
                        <div
                            key={`${strokeWidth}-value`}
                            style={{
                                borderBottom: `${theme[strokeWidth as keyof typeof theme]} solid #000`,
                            }}
                        />,
                    ];
                })}
        </div>
    );
};

export default {
    title: '主題/StrokeWidths',
    parameters: {
        docs: {
            canvas: {
                sourceState: 'none',
                withToolbar: false,
            },
        },
    },
};
