import { makeStyles, Theme } from '@material-ui/core/styles';

// components
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

// providers
import { Compare, useCompareValue } from 'providers/CompareProvider';
import { useMemo } from 'react';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({}));

export type CompareTableProps = {};

const compareProperties = ['Salary', 'Age', 'Name'];

/**
 * @component CompareTable
 */
function CompareTable({}: CompareTableProps) {
  const classes = useStyles();

  const compare = useCompareValue();

  const filteredAge = useMemo(() => compare.map((item) => item?.employee_age), [compare]);
  const filteredSalary = useMemo(() => compare.map((item) => item?.employee_salary), [compare]);

  if (compare.length === 0)
    return (
      <Typography align="center" variant="h4">
        Nothing To Compare
      </Typography>
    );

  return (
    <Paper elevation={2}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {compare.map((item) => (
                <TableCell>{item?.employee_name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* start age row */}
            <TableRow>
              <TableCell>Age</TableCell>
              {filteredAge.map((age) => (
                <TableCell>{age}</TableCell>
              ))}
            </TableRow>
            {/* end age row */}

            {/* start salary row */}
            <TableRow>
              <TableCell>Salary</TableCell>
              {filteredSalary.map((salary) => (
                <TableCell>{`$${salary}`}</TableCell>
              ))}
            </TableRow>
            {/* end salary row */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default CompareTable;
