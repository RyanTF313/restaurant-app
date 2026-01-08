import DashboardHeader from "../sections/DashboardHeader";
import { useAuthStore } from "../../store/auth.store";
import { useEffect } from "react";
import { useEmployeeStore } from "../../store/employee.store";

function OwnerDashboard() {
  const user = useAuthStore((s) => s.user);
  const { employees, fetchEmployees } = useEmployeeStore();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements[0] as HTMLInputElement).value;
    const email = (form.elements[1] as HTMLInputElement).value;
    const password = (form.elements[2] as HTMLInputElement).value;

    await useEmployeeStore.getState().createEmployee({ name, email, password });
    form.reset();
  };

  return (
    <>
      <DashboardHeader user={user} />
      <div className="flex flex-col text-center gap-6">
        <h1>Employees</h1>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <h4>Add New Employee:</h4>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Add Employee</button>
            </form>
          </div>

          <div className="md:w-1/2">
            {" "}
            <h4>Employee List:</h4>
            <ul>
              {employees.map((e) => {
                console.log(e)
                return (
                  <li key={e.id || e.id}>
                    {e.name} – {e.email}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerDashboard;
