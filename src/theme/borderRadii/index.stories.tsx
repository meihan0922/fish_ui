import { teamsLightTheme } from '@fluentui/react-theme';

const theme = teamsLightTheme;

export const BorderRadii = () => {
    const borderRadiusTokens = Object.keys(theme).filter(key =>
        key.startsWith('borderRadius')
    );
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'auto repeat(3, 1fr)',
                gap: '10px 20px',
                alignItems: 'center',
            }}
        >
            {borderRadiusTokens.map(borderRadius => {
                return [
                    <div key={borderRadius}>{borderRadius}</div>,
                    <div key={`${borderRadius}-value`}>
                        {theme[borderRadius as keyof typeof theme]}
                    </div>,
                    <div
                        key={`${borderRadius}-col1`}
                        style={{
                            borderRadius:
                                theme[borderRadius as keyof typeof theme],
                            width: '50px',
                            height: '50px',
                            backgroundColor: '#ccc',
                        }}
                    />,
                    <div
                        key={`${borderRadius}-col2`}
                        style={{
                            borderRadius:
                                theme[borderRadius as keyof typeof theme],
                            width: '50px',
                            height: '50px',
                            border: `1px solid #333`,
                        }}
                    />,
                ];
            })}
        </div>
    );
};

export default {
    title: '主題/BorderRadii',
    parameters: {
        docs: {
            canvas: {
                sourceState: 'none',
                withToolbar: false,
            },
        },
    },
};
