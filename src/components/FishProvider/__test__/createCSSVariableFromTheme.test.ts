import { describe, it, expect } from 'vitest';
import { createCSSVariableFromTheme } from '../useThemeStyles';
import type { Theme } from '@fluentui/react-theme';

describe('createCSSVariableFromTheme', () => {
    it('when theme is undefined, should return the correct css variable', () => {
        expect(createCSSVariableFromTheme('.selector', undefined)).toBe(
            '.selector{ }'
        );
    });
    it('should return the correct css variable', () => {
        const cssVariable: Partial<Theme> = {
            colorBackgroundOverlay: 'red',
            borderRadiusMedium: '10px',
        };
        expect(createCSSVariableFromTheme('.selector', cssVariable)).toBe(
            '.selector{ --colorBackgroundOverlay: red; --borderRadiusMedium: 10px; }'
        );
    });
});
