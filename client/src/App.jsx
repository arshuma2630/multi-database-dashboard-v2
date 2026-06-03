import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";
import UploadPage from "./pages/UploadPage";
import Notifications from "./components/Notifications";


import MySQLPage from "./pages/MySQLPage";
import MongoPage from "./pages/MongoPage";
import GoogleDocsPage from "./pages/GoogleDocsPage";

function App() {

const [activePage, setActivePage] = useState("mysql");



  return   (
    
    <div className="app-container">
      
      
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-content">
        
        <Navbar />

        <StatsCards
          employees={5}
          users={1}
          docs={2}
        />
        <Notifications />

        {activePage === "mysql" && <MySQLPage />}

        {activePage === "mongo" && <MongoPage />}

        {activePage === "docs" && <GoogleDocsPage />}

        {activePage === "upload" && <UploadPage />}

      </div>

    </div>
  );
}

export default App;