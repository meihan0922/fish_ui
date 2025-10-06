
import { teamsDarkTheme, tokens } from "@fluentui/react-theme";
import { makeStyles } from "@griffel/react";
import { FishProvider } from "fish-ui";
// import { tokens } from "@fluentui/react-theme";


const useClasses = makeStyles({
  root: {
    backgroundColor: tokens.colorBrandBackground2,
    padding: '10px',
    border: `10px solid pink`,
  },
})

export const Custom = () => {
  const classes = useClasses();
  return <FishProvider className={classes.root} theme={teamsDarkTheme}><div>Theme test</div></FishProvider>
};

