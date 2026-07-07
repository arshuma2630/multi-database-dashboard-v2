import { useState, useEffect } from "react";
import API from "../services/api";

function UploadPage() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");

  const fetchFiles = async () => {
    try {
      const response = await API.get("/files");
      setFiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async () => {
    if (!file) {
      setMessage("❌ Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await API.post("/upload", formData);

      setMessage("✅ File uploaded successfully");

      fetchFiles();

      setFile(null);

    } catch (error) {
      setMessage("❌ Upload failed");
      console.log(error);
    }
  };

  const deleteFile = async (filename) => {
    try {
      await API.delete(`/files/${filename}`);

      setMessage("🗑️ File deleted successfully");

      fetchFiles();

    } catch (error) {
      console.log(error);
      setMessage("❌ Delete failed");
    }
  };

  return (
    <div>
      {/* <h2>File Upload</h2> */}

      <h2>Document Management</h2>
         <p>
  Upload policies, compliance reports, training documents and employee records.
</p>
    

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Upload
      </button>

      {message && (
        <p
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            color: "green",
          }}
        >
          {message}
        </p>
      )}

     
      {/* <h3>Document Management</h3> */}

      {files.length === 0 ? (
        <p>No files uploaded yet</p>
      ) : (
        files.map((file, index) => (
          <div
            key={index}
            className="employee-card"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>📄 {file}</span>

            <button
              onClick={() => deleteFile(file)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default UploadPage;