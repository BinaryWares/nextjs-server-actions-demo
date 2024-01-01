'use server';

import { Employee, addEmployee as storeEmpInDB } from '@/app/persistence';
import { revalidatePath } from 'next/dist/server/web/spec-extension/revalidate-path';

export default async function addEmployee(employeeData: FormData) {
  const name = employeeData.get('employeeName') as string;
  const department = employeeData.get('employeeDepartment') as string;

  if (!name || !department) return { error: 'Invalid Input Parameters' };

  const submittedData: Employee = {
    name,
    department,
  };

  await storeEmpInDB(submittedData);
  revalidatePath('/');

  return { message: `${name} Added Succefully!` };
}
