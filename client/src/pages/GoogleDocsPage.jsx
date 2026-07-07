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

      console.log("GOOGLE DOCS:", response.data);

      setDocs(response.data);

    } catch (error) {

      console.log("GOOGLE DOCS ERROR:", error);
    }
  };

  return (
    <div>

      <h2>Document Repository</h2>

      <p>
        Total Docs: {docs.length}
      </p>

      {docs.length === 0 ? (
        <p>No documents found</p>
      ) : (
        docs.map((doc, index) => (
          <div
            key={index}
            className="employee-card"
            style={{
              marginBottom: "15px"
            }}
          >
            <h3>{doc.title}</h3>

            
             <p>Source: Google Drive</p>
            
          </div>
        ))
      )}

    </div>
  );
}

export default GoogleDocsPage;