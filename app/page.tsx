import { Suspense } from "react";
import Form from "@/app/components/form";
import EmployeeList from "@/app/components/employeeList";

export default function Home() {
  return (
    <main className="grid gap-4 fird-col-1 box-border p-8 place-content-center">
      <h1 className="font-bold text-lg text-center">Employees Records</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Form />
      </Suspense>
      <Suspense fallback={<p>Loading Employees List...</p>}>
        <EmployeeList />
      </Suspense>
    </main>
  );
}
