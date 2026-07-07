import { useState, useEffect } from "react";
import API from "./services/api";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";
import UploadPage from "./pages/UploadPage";
import Notifications from "./components/Notifications";
import LoginPage from "./pages/LoginPage";

import MySQLPage from "./pages/MySQLPage";
import MongoPage from "./pages/MongoPage";
import GoogleDocsPage from "./pages/GoogleDocsPage";
import AIQueryPage from "./pages/AIQueryPage";

function App() {

  const [activePage, setActivePage] = useState("mysql");
  const [user, setUser] = useState(null);

  const [employeeCount, setEmployeeCount] = useState(0);
  const [mongoUserCount, setMongoUserCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
const [pendingCount, setPendingCount] = useState(0);
  const [docCount, setDocCount] = useState(0);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {

      const employeeResponse = await API.get("/employees");

      const mongoResponse = await API.get("/users");

      const docsResponse = await API.get("/google-docs");

      console.log("Employees:", employeeResponse.data);
      console.log("Mongo Users:", mongoResponse.data);
      console.log("Docs:", docsResponse.data);

      setEmployeeCount(employeeResponse.data.length);

      const completed = mongoResponse.data.filter(
  (user) => user.status === "Completed"
).length;

const pending = mongoResponse.data.filter(
  (user) => user.status === "Pending"
).length;

setCompletedCount(completed);
setPendingCount(pending);

      setDocCount(docsResponse.data.length);

    } catch (error) {

      console.log("Dashboard Stats Error:", error);

    }
  };

  return (
    <div className="app-container">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-content">

        <Navbar />

        <LoginPage
          user={user}
          setUser={setUser}
        />

       <StatsCards
  employees={employeeCount}
  completed={completedCount}
  pending={pendingCount}
  docs={docCount}
/>
        <Notifications />

        {activePage === "mysql" && <MySQLPage />}

        {activePage === "mongo" && <MongoPage />}

        {activePage === "docs" && <GoogleDocsPage />}

        {activePage === "upload" && <UploadPage />}

        {activePage === "ai" && <AIQueryPage />}

      </div>

    </div>
  );
}

export default App;