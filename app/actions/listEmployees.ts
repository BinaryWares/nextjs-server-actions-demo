'use server';

import { getAllEmployees } from '@/app/persistence';

export default async function listEmployees() {
  const employees = await getAllEmployees();
  return employees;
}
