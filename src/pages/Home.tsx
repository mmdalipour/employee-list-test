import { makeStyles, Theme } from '@material-ui/core/styles';

// components
import EmployeeList from 'components/EmployeeList';
import CompareTable from 'components/CompareTable';

// constants
import { SPACING, SPACING_DOUBLE } from 'constants/spacing';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  employeeListWrapper: {
    marginBottom: theme.spacing(SPACING_DOUBLE),
  },
}));

export type HomeProps = {};

/**
 * @component Home
 */
function Home({}: HomeProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.employeeListWrapper}>
        <EmployeeList />
      </div>
      <CompareTable />
    </div>
  );
}

export default Home;
