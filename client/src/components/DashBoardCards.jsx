function DashboardCards() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        margin: "20px 0",
      }}
    >
      <div className="card">
        <h3>MySQL</h3>
        <p>Connected</p>
      </div>

      <div className="card">
        <h3>MongoDB</h3>
        <p>Connected</p>
      </div>

      <div className="card">
        <h3>Google Docs</h3>
        <p>Connected</p>
      </div>
    </div>
  );
}

export default DashboardCards;