import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { FishProvider } from 'fish-ui';
// import { tokens } from "@fluentui/react-theme";

const useClasses = makeStyles({
    example: {
        backgroundColor: tokens.colorBackgroundOverlay,
    },
});

export const Nested = () => {
    return (
        <div>
            <FishProvider>
                <div>
                    <Child text="Theme test" />
                    <FishProvider
                        theme={{
                            colorBackgroundOverlay: 'red',
                        }}
                    >
                        <Child text="Theme test: use nested theme" />
                    </FishProvider>
                </div>
            </FishProvider>
        </div>
    );
};

function Child({ text }: { text: string }) {
    const classes = useClasses();
    return <div className={classes.example}>{text}</div>;
}
