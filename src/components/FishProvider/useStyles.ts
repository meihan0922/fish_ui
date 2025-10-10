// import { tokens } from '@fluentui/react-theme';
import { makeStyles, mergeClasses } from '@griffel/react';
import type { FishProviderProps } from './FishProvider';
import { useThemeStyles } from './useThemeStyles';

// 標記 fish-ui 組件
const fishProviderClassNames = {
    root: 'fish-provider',
};

const useBaseStyles = makeStyles({
    root: {
        // backgroundColor: tokens.colorBackgroundOverlay,
        // padding: '10px',
        // border: `10px solid ${tokens.colorPaletteRedBackground1}`,
    },
});

export const useStyles = ({ className, theme }: FishProviderProps) => {
    const baseStyles = useBaseStyles();
    const { themeClassNames } = useThemeStyles({ theme });

    return mergeClasses(
        fishProviderClassNames.root,
        themeClassNames,
        baseStyles.root,
        className
    );
};
