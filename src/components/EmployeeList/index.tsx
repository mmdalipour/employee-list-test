import { makeStyles, Theme } from "@material-ui/core/styles";

// components
import Grid from "@material-ui/core/Grid";
import EmployeeCard from "components/EmployeeCard";

// constants
import { SPACING_HALF } from "constants/spacing";

// api
import { useAllEmployees } from "hooks/employees";

const useStyles = makeStyles((theme: Theme) => ({}));

export type EmployeeListProps = {};

/**
 * @component EmployeeList
 */
function EmployeeList({}: EmployeeListProps) {
  const classes = useStyles();

  const { data, isLoading } = useAllEmployees();

  const employees = data?.data;

  if (!employees && isLoading) return null;

  return (
    <Grid container spacing={SPACING_HALF}>
      {employees?.map((employee) => (
        <Grid key={employee.id} item xs={12} sm={4} md={3}>
          <EmployeeCard {...employee} />
        </Grid>
      ))}
    </Grid>
  );
}

export default EmployeeList;
