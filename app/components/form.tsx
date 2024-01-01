'use server';

import addEmployee from '@/app/actions/addEmployee';

export default async function Form() {
  return (
    <form className="border-2 rounded-md p-2 max-w-[460px]" action={addEmployee}>
      <section className="flex mb-4  justify-around">
        <div>
          <label htmlFor="empName" className="text-xs">
            Employee Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            name="employeeName"
            id="empName"
            className="px-[0.25px] py-[2px] rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="empDept" className="text-xs">
            Department
          </label>
          <input
            type="text"
            placeholder="Engineering"
            name="employeeDepartment"
            id="empDept"
            className="px-[0.25px] py-[2px] rounded text-black"
          />
        </div>
      </section>
      <section className="flex justify-center">
        <button
          type="submit"
          className="border py-1 px-2 rounded font-bold hover:bg-white hover:text-black focus:bg-white focus:text-black"
        >
          Add Employee
        </button>
      </section>
    </form>
  );
}
