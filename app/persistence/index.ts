'use server';

// for simplicity of the demo, the data is persisted as an in-memory object.

export type Employee = {
  name: string;
  department: string;
};

let employees: Employee[] = [];

export async function getAllEmployees() {
  return employees;
}

export async function addEmployee(emp: Employee) {
  employees.push(emp);
}
