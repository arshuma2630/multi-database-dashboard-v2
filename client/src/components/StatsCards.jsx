function StatsCards({ employees, completed, pending, docs }) {
  return (
    <div className="stats-container">

      <div className="card">
        <h3>Total Employees</h3>
        <h2>{employees}</h2>
      </div>

      <div className="card">
        <h3>Completed Trainings</h3>
        <h2>{completed}</h2>
      </div>

      <div className="card">
        <h3>Pending Trainings</h3>
        <h2>{pending}</h2>
      </div>

      <div className="card">
        <h3>Documents Available</h3>
        <h2>{docs}</h2>
      </div>

    </div>
  );
}

export default StatsCards;