import { useState } from "react";
import API from "../services/api";

function UploadPage() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  const handleUpload = async () => {
    if (!file) {
      alert("Select a file first");
      return;
    }

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

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await API.post(
        "/upload",
        formData
      );

      alert(response.data.message);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>File Upload</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Upload
      </button>

      <h3>Uploaded Files</h3>

{files.map((file, index) => (
  <div key={index} className="employee-card">
    📄 {file}
  </div>
))}
    </div>
  );
}

export default UploadPage;