import { useEffect, useState } from "react";
import API from "../services/api";


function MySQLPage() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
  try {
    const response = await API.get("/employees");

    console.log(response.data);

    setEmployees(response.data);
  } catch (error) {
    console.log(error);
  }
};
  const searchEmployee = async () => {
  try {
    const response = await API.get(
      `/employees/search?name=${search}`
    );

    setEmployees(response.data);
  } catch (error) {
    console.log(error);
  }
};

//   return (
//     <div>
//       <h2>MySQL Employees</h2>

//       {employees.map((emp) => (
//         <div key={emp.id}>
//           <p>{emp.name}</p>
//           <p>{emp.role}</p>
//           <p>{emp.salary}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );

console.log("Employees Length:", employees.length);
console.log("Employees:", employees);

return (
  <div>
    <h2>MySQL Employees</h2>
    <p>Total Employees: {employees.length}</p>
    <input
  type="text"
  placeholder="Search employee..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

<button onClick={searchEmployee}>
        Search
      </button>

      

      
   {employees.map((emp) => (
  <div key={emp.id}>
    {/* <p>Name: {emp.name}</p>
    <p>Role: {emp.role}</p>
    <p>Salary: ₹{emp.salary}</p> */}

<div key={emp.id} className="employee-card">
  <h3>{emp.name}</h3>
  <p>{emp.role}</p>
  <p>₹{emp.salary}</p>
</div>

    
    <hr />
  </div>
))}
  </div>
);
}

export default MySQLPage;