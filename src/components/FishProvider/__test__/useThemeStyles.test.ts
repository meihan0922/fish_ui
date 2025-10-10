import { describe, it, expect } from 'vitest';
import { useThemeStyles } from '../useThemeStyles';
import type { Theme } from '@fluentui/react-theme';
import { renderHook } from '@testing-library/react';

describe('useThemeStyles', () => {
    const defaultTheme = {
        'css-var-1': 'r1',
        'css-var-2': 'r2',
    } as unknown as Theme;

    it('should render <style> tag', () => {
        const {
            result: {
                current: { themeClassNames },
            },
        } = renderHook(() => useThemeStyles({ theme: defaultTheme }));
        expect(document.getElementById(themeClassNames)).not.toBeNull();
    });

    it('should remove <style> tag when unmounted', () => {
        const { result, unmount } = renderHook(() =>
            useThemeStyles({ theme: defaultTheme })
        );

        unmount();

        expect(
            document.getElementById(result.current.themeClassNames)
        ).toBeNull();
    });
});
