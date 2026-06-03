function StatsCards({ employees, users, docs }) {
  return (
    <div className="stats-container">

      <div className="card">
        <h3>Employees</h3>
        <h2>{employees}</h2>
      </div>

      <div className="card">
        <h3>Mongo Users</h3>
        <h2>{users}</h2>
      </div>

      <div className="card">
        <h3>Google Docs</h3>
        <h2>{docs}</h2>
      </div>

    </div>
  );
}

export default StatsCards;