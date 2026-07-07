import { useEffect, useState } from "react";
import API from "../services/api";

function MongoPage() {

  const [users, setUsers] = useState([]);
  
  // YEH NAYA STATE 👇
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await API.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // YEH NAYA FUNCTION 👇
  const searchUser = async () => {
    try {
      const response = await API.get(
        `/users/search?name=${search}`
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  
    return (
  <div>
    <h2>Employee Training & Compliance Tracker</h2>

    <input
      type="text"
      placeholder="Search user..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <button onClick={searchUser}>
      Search
    </button>

    {users.map((user, index) => (
      <div key={index} className="employee-card">
        {/* <h3>{user.name}</h3>
        <p>{user.role}</p> */}

        <h3>{user.name}</h3>

<p>Department: {user.department}</p>

<p>Training: {user.training}</p>

<p>
  Status:
  <span
    style={{
      color: user.status === "Completed" ? "green" : "red",
      fontWeight: "bold",
      marginLeft: "5px"
    }}
  >
    {user.status}
  </span>
</p>
        <hr />
      </div>
    ))}
  </div>
);
  
}

export default MongoPage;