import axios from "axios";

export type Response<T extends object> = {
  data?: T;
  status: string;
};

export type Employee = {
  id: number;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
};

/**
 * @function getEmployees
 * @summary request for all employees
 */
async function getEmployees() {
  const { data } = await axios.get<Response<Employee[]>>("/employees");
  return data;
}

export { getEmployees };
