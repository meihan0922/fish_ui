import { useId, useLayoutEffect, useMemo, useRef } from 'react';
import type { FishProviderProps } from './FishProvider';

/**
 * 將 theme 轉換為 css variable
 * theme 的 key 為 ex: colorBackgroundOverlay: #000，轉換為 --colorBackgroundOverlay: #000;
 * @param selector 選擇器名稱
 * @param theme theme 物件
 * @returns 轉換後的 css variable
 */
export const createCSSVariableFromTheme = (
    selector: string,
    theme: FishProviderProps['theme']
) => {
    if (theme) {
        const cssVarsAsString = Object.entries(theme)
            .map(([key, value]) => `--${key}: ${value};`)
            .join(' ');
        return `${selector}{ ${cssVarsAsString} }`;
    }
    return `${selector}{ }`;
};

const createStyleTag = (
    target: Document | undefined,
    elementAttr: Record<string, string>
) => {
    if (!target) return undefined;
    const tag = target.createElement('style');
    Object.entries(elementAttr).forEach(([key, value]) => {
        tag.setAttribute(key, value);
    });
    target.head.appendChild(tag);

    return tag;
};

const insertSheet = (
    target: HTMLStyleElement | undefined,
    cssVariable: string
) => {
    if (!target) return;
    const sheet = target.sheet;
    if (sheet) {
        if (sheet.cssRules.length > 0) {
            sheet.deleteRule(0);
        }
        sheet.insertRule(cssVariable);
    }
};

/**
 * 使用 CssStyleSheet 來插入 css variable
 * @param theme theme 物件
 * @returns 此 theme 的 class name
 */
export const useThemeStyles = ({
    theme,
}: {
    theme: FishProviderProps['theme'];
}) => {
    // 使用 useId 來生成唯一的 id
    const id = useId();
    const escapeId = useMemo(() => id.replace(/«|»/g, ''), [id]);
    const themeClassNames = 'fish-ui-Provider' + escapeId;
    const cssRules = useMemo(
        () => createCSSVariableFromTheme(`.${themeClassNames}`, theme),
        [theme, themeClassNames]
    );

    const styleTag = useRef<HTMLStyleElement | null | undefined>(null);

    useLayoutEffect(() => {
        styleTag.current = createStyleTag(document, {
            id: themeClassNames,
        });
        if (styleTag.current) {
            insertSheet(styleTag.current, cssRules);
        }
        return () => {
            styleTag.current?.remove();
        };
    }, [cssRules, themeClassNames]);

    return { themeClassNames };
};
