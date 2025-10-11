import { teamsLightTheme } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { useState } from 'react';

const theme = teamsLightTheme;

const useClasses = makeStyles({
    duratoinAnimation: {
        width: '4px',
        height: '64px',
        margin: '0 30px',
        backgroundColor: '#ccc',
        animationIterationCount: 'infinite',
        animationName: {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(180deg)' },
        },
    },
    curvesAnimation: {
        width: '64px',
        height: '64px',
        borderRadius: '64px',
        position: 'relative',
        backgroundColor: '#ccc',
        animationIterationCount: 'infinite',
        animationName: {
            from: { left: '0' },
            to: { left: '200px' },
        },
    },
});

export const MotionDuration = () => {
    const classes = useClasses();
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <div>
            <h3>Duration</h3>
            <input
                type="checkbox"
                id="duration"
                checked={isEnabled}
                onChange={() => setIsEnabled(!isEnabled)}
            />
            <label htmlFor="duration">Enable animations</label>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    alignItems: 'center',
                }}
            >
                {(Object.keys(theme) as (keyof typeof theme)[])
                    .filter(key => key.startsWith('duration'))
                    .map(key => {
                        return [
                            <div key={key}>{key}</div>,
                            <div key={`${key}-value`}>{theme[key]}</div>,
                            <div key={`${key}-demo`}>
                                <div
                                    className={classes.duratoinAnimation}
                                    style={{
                                        animationDuration: isEnabled
                                            ? (theme[key] as string)
                                            : '0ms',
                                    }}
                                />
                            </div>,
                        ];
                    })}
            </div>
        </div>
    );
};

export const MotionCurves = () => {
    const classes = useClasses();
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <div>
            <h3>Curves</h3>
            <input
                type="checkbox"
                id="duration"
                checked={isEnabled}
                onChange={() => setIsEnabled(!isEnabled)}
            />
            <label htmlFor="duration">Enable animations</label>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    alignItems: 'center',
                }}
            >
                {(Object.keys(theme) as (keyof typeof theme)[])
                    .filter(key => key.startsWith('curve'))
                    .map(key => {
                        return [
                            <div key={key}>{key}</div>,
                            <div key={`${key}-value`}>{theme[key]}</div>,
                            <div key={`${key}-demo`}>
                                <div
                                    className={classes.curvesAnimation}
                                    style={{
                                        animationDuration: isEnabled
                                            ? '2s'
                                            : '0ms',
                                        animationTimingFunction: theme[
                                            key
                                        ] as string,
                                    }}
                                />
                            </div>,
                        ];
                    })}
            </div>
        </div>
    );
};

export default {
    title: '主題/Motions',
    parameters: {
        docs: {
            canvas: {
                sourceState: 'none',
                withToolbar: false,
            },
        },
    },
};
