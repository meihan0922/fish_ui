import React, { createContext, } from "react";
import type { Theme } from "@fluentui/react-theme";
import { useStyles } from "./useStyles";

export type FishProviderProps = React.HtmlHTMLAttributes<React.PropsWithChildren<ThemeContextValue>> & {
    theme?: Theme | Partial<Theme>;
}

type ThemeContextValue = Theme | Partial<Theme> | undefined;

const FishContext = createContext<ThemeContextValue>(undefined);


export const FishProvider = ({ className, theme, children, ...restProps }: FishProviderProps) => {
    const styles = useStyles({ className, theme });

    return (
        <FishContext.Provider value={theme} {...restProps}>
            {/* 把 class variable 掛載 root 上 */}
            <div className={styles}>
                {children}
            </div>
        </FishContext.Provider>
    );
};