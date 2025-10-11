import {
    teamsDarkTheme,
    teamsHighContrastTheme,
    teamsLightTheme,
} from '@fluentui/react-theme';

const theme = {
    light: teamsLightTheme,
    dark: teamsDarkTheme,
    higContrast: teamsHighContrastTheme,
};

const ShadowBox = ({
    shadow,
    isBrand,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
    shadow: string;
    isBrand: boolean;
}) => {
    return (
        <div
            {...rest}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                boxShadow: shadow,
                minHeight: '50px',
                fontSize: '12px',
                ...(isBrand && {
                    backgroundColor: theme.light.colorBrandBackground,
                    color: theme.light.colorNeutralForegroundOnBrand,
                }),
            }}
        >
            {shadow.split('),').map((line, index, arr) => {
                const val = index < arr.length - 1 ? line + ')' : line;
                return <div key={val}>{val}</div>;
            })}
        </div>
    );
};

export const Shadows = () => {
    const shadowsTokens = Object.keys(theme.light).filter(key =>
        key.startsWith('shadow')
    ) as (keyof typeof theme.light)[];

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '40px',
                alignItems: 'center',
            }}
        >
            <h3>Shadows</h3>
            <h3>Light</h3>
            <h3>Dark</h3>
            <h3>High Contrast</h3>
            {shadowsTokens.map(shadowToken => {
                const isBrand = shadowToken.includes('Brand');
                return [
                    <div key={shadowToken}>{shadowToken}</div>,
                    <ShadowBox
                        key={`${shadowToken}-light-box`}
                        shadow={theme.light[shadowToken] as string}
                        isBrand={isBrand}
                    />,
                    <ShadowBox
                        key={`${shadowToken}-dark-box`}
                        shadow={theme.dark[shadowToken] as string}
                        isBrand={isBrand}
                    />,
                    <ShadowBox
                        key={`${shadowToken}-higContrast-box`}
                        shadow={theme.higContrast[shadowToken] as string}
                        isBrand={isBrand}
                    />,
                ];
            })}
        </div>
    );
};

export default {
    title: '主題/Shadows',
    parameters: {
        docs: {
            canvas: {
                sourceState: 'none',
                withToolbar: false,
            },
        },
    },
};
