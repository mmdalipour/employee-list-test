import { getEmployees, Employee, Response } from "api/employees";

// hooks
import { useQuery } from "react-query";

/**
 * @function useAllEmployees
 * @summary get all employees
 */

function useAllEmployees() {
  return useQuery<Response<Employee[]>, Error>("employees", getEmployees);
}

export { useAllEmployees };
