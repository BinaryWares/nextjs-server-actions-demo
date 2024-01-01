'use server';

import listEmployees from "@/app/actions/listEmployees";
import {Employee} from "@/app/persistence";

function Table({employees}: {employees: Employee[]}) {
  if (employees.length === 0) {
    return (
      <p className="text-center">No employees found.</p>
    );
  };

  return (
    <table className="table-auto border p-4 my-2 w-full">
      <thead className="border-b-2">
        <tr className="text-center">
          <th className="border-r-2">Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody className="text-left">
        {employees.map((employee,index) => (
          <tr className="border-b" key={index}>
            <td className="border-r">{employee.name}</td>
            <td>{employee.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default async function EmployeeList() {
  const employees = await listEmployees();
  return (
    <section>
      <h2 className="font-bold text-lg border-b-2 my-4">
        Active Employees
        <span className="mx-2 font-normal">({employees.length})</span>
      </h2>
      <Table employees={employees}/>
    </section>
  );
}
