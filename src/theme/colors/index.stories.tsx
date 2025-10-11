import {
    teamsDarkTheme,
    teamsHighContrastTheme,
    teamsLightTheme,
    webDarkTheme,
    webLightTheme,
} from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { FishProvider } from '../../components/FishProvider';

const theme = {
    webLight: {
        colorPrimary: 'var(--colorBrandForeground1)',
        ...webLightTheme,
    },
    webDark: {
        colorPrimary: 'var(--colorBrandForeground1)',
        ...webDarkTheme,
    },
    teamsLight: {
        colorPrimary: 'var(--colorBrandForeground1)',
        ...teamsLightTheme,
    },
    teamsDark: {
        colorPrimary: 'var(--colorBrandForeground1)',
        ...teamsDarkTheme,
    },
    teamsHighContrast: {
        colorPrimary: 'var(--colorBrandForeground1)',
        ...teamsHighContrastTheme,
    },
};

const useClasses = makeStyles({
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    searchInput: {
        width: '100%',
    },
});

const tokens = Object.keys(theme.webLight).filter(key =>
    key.startsWith('color')
);

type ColorRampItemProps = {
    /** 顏色名 */
    name?: string;
    /** 顏色值 */
    value?: string;
};

// 格子背景，給 alpha 使用
const alphaStyle = {
    backgroundImage:
        'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==")',
};

function ColorRampItem({ value, name }: ColorRampItemProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const cssVarName = useMemo(() => {
        return value?.match(/^var\((--[^)]+)\)$/)?.[1];
    }, [value]);

    const [rawColorValue, setRawColorValue] = useState<string>();

    useEffect(() => {
        if (divRef.current) {
            const getComputedStyle = window.getComputedStyle(divRef.current);
            const elementColorValue =
                getComputedStyle.getPropertyValue('background-color');
            const color = new TinyColor(elementColorValue);
            const isDark = color.isDark();
            const isTransparent = color.getAlpha() < 0.5;
            divRef.current.style.color = isTransparent
                ? '#000'
                : isDark
                  ? '#fff'
                  : '#000';

            // 若有 CSS 變數名，讀取原始 token 值
            if (cssVarName) {
                const tokenValue = getComputedStyle
                    .getPropertyValue(cssVarName)
                    .trim();
                if (tokenValue) setRawColorValue(tokenValue);
                else setRawColorValue(undefined);
            } else {
                setRawColorValue(undefined);
            }
        }
    }, [cssVarName, value]);

    return (
        <div style={alphaStyle}>
            <div
                ref={divRef}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: value,
                    width: '100%',
                    boxSizing: 'border-box',
                    height: '100%',
                    padding: '1.5vh',
                    fontSize: '12px',
                }}
            >
                {name && <span>{name}</span>}
                {value && <span>{cssVarName ?? value}</span>}
                {rawColorValue && <span>{rawColorValue}</span>}
            </div>
        </div>
    );
}

const debouncedCallback = (callback: () => void, delay: number = 500) => {
    const timeoutId = setTimeout(callback, delay);
    return () => clearTimeout(timeoutId);
};

export const Colors = () => {
    const [searchResult, setSearchResult] = useState<string[]>(tokens);
    const [inputValue, setInputValue] = useState('');
    const classes = useClasses();

    const handleSearch = useCallback((value: string) => {
        const tokensFoundBySearch = tokens.filter(
            token =>
                token.toLowerCase().includes(value) ||
                theme.webLight[
                    token as keyof typeof theme.webLight
                ]!.toString().includes(value) ||
                theme.teamsLight[
                    token as keyof typeof theme.teamsLight
                ]!.toString().includes(value) ||
                theme.teamsDark[
                    token as keyof typeof theme.teamsDark
                ]!.toString().includes(value) ||
                theme.teamsHighContrast[
                    token as keyof typeof theme.teamsHighContrast
                ]!.toString().includes(value)
        );
        setSearchResult(tokensFoundBySearch);
    }, []);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.trim().toLowerCase();
            setInputValue(value);
            debouncedCallback(() => handleSearch(value));
        },
        [handleSearch]
    );

    return (
        <FishProvider>
            <div className={classes.searchContainer}>
                <input
                    placeholder="搜尋 theme 顏色 或是語意名稱 來找到 tokens"
                    className={classes.searchInput}
                    onChange={handleInputChange}
                    value={inputValue}
                />
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'inline-grid',
                    gridTemplateColumns: '300px repeat(5, 1fr)',
                    columnGap: '10px',
                    alignItems: 'stretch',
                }}
            >
                <h3>Design Token</h3>
                <h3>Web Light</h3>
                <h3>Web Dark</h3>
                <h3>Teams Light</h3>
                <h3>Teams Dark</h3>
                <h3>Teams High Contrast</h3>
                {searchResult.map(name => {
                    return [
                        <div
                            key={name}
                            style={{
                                padding: '0 10px',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                                fontSize: '14px',
                            }}
                        >
                            {name}
                        </div>,
                        <ColorRampItem
                            key={`${name}Light`}
                            value={
                                theme.webLight[
                                    name as keyof typeof theme.webLight
                                ] as string
                            }
                        />,
                        <ColorRampItem
                            key={`${name}Dark`}
                            value={
                                theme.webDark[
                                    name as keyof typeof theme.webDark
                                ] as string
                            }
                        />,
                        <ColorRampItem
                            key={`${name}TeamsLight`}
                            value={
                                theme.teamsLight[
                                    name as keyof typeof theme.teamsLight
                                ] as string
                            }
                        />,
                        <ColorRampItem
                            key={`${name}TeamsDark`}
                            value={
                                theme.teamsDark[
                                    name as keyof typeof theme.teamsDark
                                ] as string
                            }
                        />,
                        <ColorRampItem
                            key={`${name}TeamsHighContrast`}
                            value={
                                theme.teamsHighContrast[
                                    name as keyof typeof theme.teamsHighContrast
                                ] as string
                            }
                        />,
                    ];
                })}
            </div>
        </FishProvider>
    );
};

export default {
    title: '主題/Colors',
    parameters: {
        docs: {
            canvas: {
                sourceState: 'none',
                withToolbar: false,
            },
        },
    },
};
