function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>

      <ul>
        <li
  className={activePage === "mysql" ? "active" : ""}
  onClick={() => setActivePage("mysql")}
>
  🗄️ MySQL
</li>

<li
  className={activePage === "mongo" ? "active" : ""}
  onClick={() => setActivePage("mongo")}
>
  🍃 MongoDB
</li>

<li
  className={activePage === "docs" ? "active" : ""}
  onClick={() => setActivePage("docs")}
>
  📄 Google Docs
</li>

<li
  className={activePage === "upload" ? "active" : ""}
  onClick={() => setActivePage("upload")}
>
  📤 Upload Files
</li>
      </ul>
    </div>
  );
}

export default Sidebar;