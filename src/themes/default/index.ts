import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

import typography from "./typography";
import palette from "./palette";
import shadows from "./shadows";

const theme = createMuiTheme({
  palette,
  typography,
  shadows,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      },
      outlined: {
        borderWidth: 2,
      },
    },
  },
});

export default theme;
