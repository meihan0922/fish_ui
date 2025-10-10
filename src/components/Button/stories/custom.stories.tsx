import { makeStyles } from '@griffel/react';
import { Button } from 'fish-ui';
// import { tokens } from "@fluentui/react-theme";

const useClasses = makeStyles({
    root: {
        backgroundColor: 'red',
        padding: '10px',
        // border: `10px solid ${tokens.colorPaletteRedBackground1}`,
        border: `10px solid pink`,
    },
});

export const Custom = () => {
    const styles = useClasses();
    return (
        <div className={styles.root}>
            <Button label="Custom" primary />
        </div>
    );
};
