import {
    teamsDarkTheme,
    tokens,
    webLightTheme,
    webDarkTheme,
    teamsLightTheme,
} from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { FishProvider } from 'fish-ui';
// import { tokens } from "@fluentui/react-theme";

const useClasses = makeStyles({
    root: {
        backgroundColor: tokens.colorBrandBackground2,
        padding: '10px',
        border: `10px solid ${tokens.colorBackgroundOverlay}`,
        borderRadius: tokens.borderRadiusMedium,
    },
});

export const Custom = () => {
    const classes = useClasses();
    return (
        <div>
            <FishProvider className={classes.root} theme={teamsLightTheme}>
                <div>Theme test</div>
            </FishProvider>
            <FishProvider className={classes.root} theme={teamsDarkTheme}>
                <div>Theme test</div>
            </FishProvider>
            <FishProvider className={classes.root} theme={webLightTheme}>
                <div>Theme test</div>
            </FishProvider>
            <FishProvider className={classes.root} theme={webDarkTheme}>
                <div>Theme test</div>
            </FishProvider>
        </div>
    );
};
