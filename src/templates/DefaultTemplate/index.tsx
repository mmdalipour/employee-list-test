import { ReactNode } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

// components
import Container from "@material-ui/core/Container";

// constants
import { SPACING, SPACING_DOUBLE } from "constants/spacing";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  wrapper: {
    flex: 1,
    paddingTop: theme.spacing(SPACING_DOUBLE),
    paddingBottom: theme.spacing(SPACING_DOUBLE),
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(SPACING),
      paddingBottom: theme.spacing(SPACING),
    },
  },
}));

export type DefaultTemplateProps = {
  children: ReactNode;
};

/**
 * @component DefaultTemplate
 */
function DefaultTemplate({ children }: DefaultTemplateProps) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.wrapper}>{children}</div>
    </Container>
  );
}

export default DefaultTemplate;
