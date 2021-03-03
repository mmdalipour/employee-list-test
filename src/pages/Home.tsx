import { makeStyles, Theme } from '@material-ui/core/styles';

// components
import EmployeeList from 'components/EmployeeList';
import CompareTable from 'components/CompareTable';
import ClearCompareButton from 'components/ClearCompareButton';

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
  clearCompareWrapper: {
    marginBottom: theme.spacing(SPACING),
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
      <div className={classes.clearCompareWrapper}>
        <ClearCompareButton />
      </div>
      <CompareTable />
    </div>
  );
}

export default Home;
