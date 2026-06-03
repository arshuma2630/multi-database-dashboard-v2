import { useEffect, useState } from "react";
import API from "../services/api";

function GoogleDocsPage() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    fetchDocs();
  }, []);

  const fetchDocs = async () => {
    try {
      const response = await API.get("/google-docs");
      setDocs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        
      <h2>Google Docs</h2>

      {docs.map((doc, index) => (
        // <div key={index}>
        //   <p>Title: {doc.title}</p>
        //   <p>Owner: {doc.owner}</p>
        //   <hr />
        // </div>

        <div key={index} className="employee-card">
  <h3>{doc.title}</h3>
  <p>Owner: {doc.owner}</p>
</div>
      ))}
    </div>
  );
}

export default GoogleDocsPage;