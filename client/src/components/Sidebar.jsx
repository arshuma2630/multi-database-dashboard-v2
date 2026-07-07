function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="sidebar">

      <h2>Compliance Dashboard</h2>

      <ul>

        <li
          className={activePage === "mysql" ? "active" : ""}
          onClick={() => setActivePage("mysql")}
        >
          👥 Employee Records
        </li>

        <li
          className={activePage === "mongo" ? "active" : ""}
          onClick={() => setActivePage("mongo")}
        >
          ✅ Training & Compliance
        </li>

        <li
          className={activePage === "docs" ? "active" : ""}
          onClick={() => setActivePage("docs")}
        >
          📄 Document Repository
        </li>

        <li
          className={activePage === "upload" ? "active" : ""}
          onClick={() => setActivePage("upload")}
        >
          📤 File Management
        </li>

        <li
  className={activePage === "ai" ? "active" : ""}
  onClick={() => setActivePage("ai")}
>
  🤖 AI Query Assistant
</li>

      </ul>

    </div>
  );
}

export default Sidebar;